<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\OrderDetail;
use App\Entity\Product;
use App\Entity\Provider;
use App\Entity\User;
use App\Repository\OrderRepository;
use DateTimeImmutable;
use DateTime;
use App\Repository\ProductRepository;
use App\Service\CommonServices;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;


class OrdersController extends AbstractController
{
    #[Route('/admin/orders/list', name: 'app_orders')]
    public function orderList(Request $request,OrderRepository $orderRepository,PaginatorInterface $paginator): Response
    {
        $user = $this->getUser();
        $allOrder=$orderRepository->findAll();

        //search
        $searchTerm = $request->query->get('search', '');
        $searchedData = $orderRepository->findBySearchTerm($searchTerm);
        //sorting
        $sortBy = $request->query->get('sort_by', 'id');
        $sortOrder = $request->query->get('sort_order', 'asc');
        $currentPage = !$request->get('page') ? 1 : $request->get('page');
        $allOrder = $orderRepository->findBy([], [$sortBy => $sortOrder]);
        //paginating
        $paginat = $paginator->paginate($allOrder, $currentPage, 10);
        if($searchTerm!=''){
            $paginat = $paginator->paginate($searchedData, $currentPage, 10);
        }
        return $this->render('admin/adminOrdersList.html.twig',
            ['orders'=>$paginat,
                'sort_by' => $sortBy,
                'sort_order' => $sortOrder,
                'search_term'=>$searchTerm]);

    }

    #[Route('/user/orders',name: 'user_orders')]
    public function userOrders(EntityManagerInterface $entityManager,PaginatorInterface $paginator,Request $request):Response
    {
        $user=$entityManager->getRepository(User::class)->findOneBy(['username'=>$this->getUser()->getUserIdentifier()]);
        $userOrders=$entityManager->getRepository(OrderDetail::class)->findOneBy(['user_id'=>$user]);
        //search
        $searchTerm = $request->query->get('search', '');
        $searchedData = $entityManager->getRepository(Order::class)->findBySearchTerm($searchTerm);
        //sorting
        $sortBy = $request->query->get('sort_by', 'id');
        $sortOrder = $request->query->get('sort_order', 'asc');
        $currentPage = !$request->get('page') ? 1 : $request->get('page');
        $allOrder = $entityManager->getRepository(Order::class)->findBy(['orderDetail'=>$userOrders], [$sortBy => $sortOrder]);
        //paginating
        $paginat = $paginator->paginate($allOrder, $currentPage, 10);
        if($searchTerm!=''){
            $paginat = $paginator->paginate($searchedData, $currentPage, 10);
        }
        return $this->render('user/ordersList.html.twig',
            ['orders'=>$paginat,
                'sort_by' => $sortBy,
                'sort_order' => $sortOrder,
                'search_term'=>$searchTerm]);
    }
    //make order view
    #[Route('/user/orders/makeOrder/view', name: 'app_make_order')]
    public function makeOrderView(EntityManagerInterface $entityManager):Response
    {
        $allusers=$entityManager->getRepository(User::class)->findAll();
        $allProducts=$entityManager->getRepository(Product::class)->findAll();
        $providers=$entityManager->getRepository(Provider::class)->findAll();
        $user = $this->getUser();
        $roles=$user->getRoles();
        $userRole='ROLE_USER';
        if (in_array('ROLE_ADMIN', $roles, true)) {
            $userRole='ROLE_ADMIN';
        }
        return $this->render('user/makeOrder.html.twig',
        ['products'=>$allProducts,
            'providers'=>$providers,
            'alluser'=>$allusers,
            'role'=>$userRole
        ]);
    }
    //fetch product by id
    #[Route('/user/prodbyid',name:'prod_by_id')]
    public function productById (Request $request,ProductRepository $productRepository):Response
    {
        $prod_id=$request->query->get('prodId');
        $searchedProd=$productRepository->find($prod_id);
        $retData=(['price'=>$searchedProd->getPrice(),'desc'=>$searchedProd->getProdDesc(),'tax'=>$searchedProd->getTax()]);
        return $this->json($retData);
    }

    //calculateTotal
    #[Route('user/order/total',name: 'app_order_total')]
    public function calculateTotal(EntityManagerInterface $entityManager,Request $request):Response
    {
        $data=json_decode($request->getContent(),true);
        $prod=$entityManager->getRepository(Product::class)->find($data['prodId']);
        $onStorage=$prod->getStorage()->getStorageQuantity();
        $quantityNeeded=$data['quantity'];

        $tax=($prod->getPrice()*$prod->getTax())/100;
        $discountValue=0;
        if($quantityNeeded>=5){
            $discountValue=15;
        }elseif ($quantityNeeded>=10){
            $discountValue=25;
        }
        if($quantityNeeded>$onStorage){
            $quantityNeeded=$onStorage;
        }
        $totalTax=($prod->getPrice()+$tax)*$data['quantity'];
        $discount=($totalTax*$discountValue)/100;
        $total=$totalTax-$discount;
        return $this->json(['quantity'=>$quantityNeeded,'total'=>$total,'discount'=>$discountValue]);
    }

    //make order
    #[Route('/user/orders/makeOrder', name: 'make_order')]
    public function makeOrder(EntityManagerInterface $entityManager,Request $request,CsrfTokenManagerInterface $csrfTokenManager,UrlGeneratorInterface $urlGenerator):Response
    {

        //generate redirect route
        $urlGenerate=$urlGenerator->generate('app_make_order');
        //recieving data and parsing it
        $data=json_decode($request->getContent(),true);
        $token = new CsrfToken('makeOrder', $request->headers->get('X-CSRF-TOKEN'));
        if (!$csrfTokenManager->isTokenValid($token)) {
            throw $this->createAccessDeniedException('invalid csrf token');
        }
        $prod=$entityManager->getRepository(Product::class)->find($data['prodId']);
        $user = $this->getUser();
        $roles=$user->getRoles();
        if (in_array('ROLE_ADMIN', $roles, true)) {
            $user= $entityManager->getRepository(User::class)->find($data['userId']);
        }
        $paymentId=null;
        $commonService=new CommonServices();
        $entityManager->getConnection()->beginTransaction();
        try {

            if ($data['method'] == 'Visa' || $data['method'] == 'MasterCard') {
                $inputFormat = 'Y-m-d';

                // Create a DateTimeImmutable object from the string
                $expdate = DateTime::createFromFormat('Y-m-d', $data['expDate']);

                $paymentMethodId = $commonService->addToPaymentMethod($entityManager, $data['accNumber'],$expdate, $user, $data['method']);
                $paymentId = $commonService->addPayment($entityManager, $paymentMethodId, $data['total'], 0);

            } else {
                $paymentMethodId = $commonService->addToPaymentMethod($entityManager, 0, null, $user, 'cash');
                $paymentId = $commonService->addPayment($entityManager, $paymentMethodId, $data['toGive'], $data['rest']);

            }
            $orderDetId=$commonService->addDetail($entityManager,$user,$data['total']);
            $orderId=$commonService->addOrder($entityManager,$prod,$orderDetId,$paymentId,$data['quantity'],$data['discount']);
            $commonService->updateStorage($entityManager,$prod,$data['quantity']);
            flash()->addFlash('success','order Made','order made succesfully');
            $entityManager->getConnection()->commit();
            return $this->json(['orderId'=>$orderId]);
        }catch (\Exception $exception){
            $entityManager->getConnection()->rollBack();
            throw $exception;

        }
        return $this->json(['result'=>'success']);
    }

    //remove order
    #[Route('/admin/orders/remove', name: 'remove_order')]
    public function removeOrder(EntityManagerInterface $entityManager, Request $request,UrlGeneratorInterface $urlGenerator):Response
    {
        //recieving the id and fetching if available product
        $ordeId = $request->query->get('orderId');
        if (!$ordeId) {
            flash()->addFlash('error', 'Empty', 'order to be removed not specified');


        }
        $orderToRemove = $entityManager->getRepository(Order::class)->find($ordeId);
        if (!$orderToRemove) {
            flash()->addFlash('error', 'Empty', 'order to be removed not found!!');
        }

        //removing the category
        $entityManager->remove($orderToRemove);
        $entityManager->flush();
        //success response
        flash()->addFlash('success', 'Removed', 'you successfuly removed the order');
        $urlGenerate=$urlGenerator->generate('app_orders');
        return $this->redirect($urlGenerate);
    }

}
