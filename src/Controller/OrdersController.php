<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Order;
use App\Entity\OrderDetail;
use App\Entity\Product;
use App\Entity\Provider;
use App\Entity\User;
use App\Repository\OrderRepository;
use App\Service\MailServices;
use DateTimeImmutable;
use DateTime;
use App\Repository\ProductRepository;
use App\Service\CommonServices;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Twig\Environment;


class OrdersController extends AbstractController
{
    #list of all orders
    #[Route('/admin/orders/list', name: 'app_orders')]
    public function orderList(Request $request,OrderRepository $orderRepository,PaginatorInterface $paginator): Response
    {
        $user = $this->getUser();
        $allOrder=$orderRepository->findAll();

        #search
        $searchTerm = $request->query->get('search', '');
        $searchedData = $orderRepository->findBySearchTerm($searchTerm);
        #sorting
        $sortBy = $request->query->get('sort_by', 'id');
        $sortOrder = $request->query->get('sort_order', 'asc');
        $currentPage = !$request->get('page') ? 1 : $request->get('page');
        $allOrder = $orderRepository->findBy([], [$sortBy => $sortOrder]);
        #paginating
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

        $user=$entityManager->getRepository(User::class)->findOneBy(['email'=>$this->getUser()->getUserIdentifier()]);
        $userOrders=$entityManager->getRepository(OrderDetail::class)->findOneBy(['user_id'=>$user]);
        #search
        $searchTerm = $request->query->get('search', '');
        $searchedData = $entityManager->getRepository(Order::class)->findBySearchTerm($searchTerm);
        #sorting
        $sortBy = $request->query->get('sort_by', 'id');
        $sortOrder = $request->query->get('sort_order', 'asc');
        $currentPage = !$request->get('page') ? 1 : $request->get('page');
        $allOrder = $entityManager->getRepository(Order::class)->findBy(['orderDetail'=>$userOrders], [$sortBy => $sortOrder]);
        #paginating
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

    #render make order view
    #[Route('/user/orders/makeOrder/view', name: 'app_make_order')]
    public function makeOrderView(EntityManagerInterface $entityManager):Response
    {
        $allCategories=$entityManager->getRepository(Category::class)->findAll();
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
        ['categories'=>$allCategories
            ,'products'=>$allProducts,
            'providers'=>$providers,
            'alluser'=>$allusers,
            'role'=>$userRole
        ]);
    }
//    //fetch product by category
//    #[Route('/user/prodbycat',name:'prod_by_cat')]
//    public function productByCat (Request $request,ProductRepository $productRepository):Response
//    {
//        $prod_id=$request->query->get('catId');
//        $searchedProd=$productRepository->find($prod_id);
//        $retData=(['price'=>$searchedProd->getPrice(),'desc'=>$searchedProd->getProdDesc(),'tax'=>$searchedProd->getTax()]);
//        return $this->json($retData);
//    }
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
        #decoding ajax data
        $data=json_decode($request->getContent(),true);
        #searching product by id
        $prod=$entityManager->getRepository(Product::class)->find($data['prodId']);
        $onStorage=$prod->getStorage()->getStorageQuantity();
        $quantityNeeded=$data['quantity'];
        #calculating tax value
        $tax=($prod->getPrice()*$prod->getTax())/100;
        #check if discount available
        $discountValue=0;
        if($quantityNeeded>=5){
            $discountValue=15;
        }elseif ($quantityNeeded>=10){
            $discountValue=25;
        }
        if($quantityNeeded>$onStorage){
            $quantityNeeded=$onStorage;
        }
        #total with tax
        $totalTax=($prod->getPrice()+$tax)*$data['quantity'];
        #discount value
        $discount=($totalTax*$discountValue)/100;
        #total with discount
        $total=$totalTax-$discount;
        return $this->json(['quantity'=>$quantityNeeded,'total'=>$total,'discount'=>$discountValue]);
    }

    #make order
    #[Route('/user/orders/makeOrder', name: 'make_order')]
    public function makeOrder(MailerInterface $mailer,Environment $twig,MailServices $mailServices,EntityManagerInterface $entityManager,Request $request,CsrfTokenManagerInterface $csrfTokenManager,UrlGeneratorInterface $urlGenerator):Response
    {

        #generate redirect route
        $urlGenerate=$urlGenerator->generate('app_make_order');
        #recieving data and parsing it
        $data=json_decode($request->getContent(),true);
        $token = new CsrfToken('makeOrder', $request->headers->get('X-CSRF-TOKEN'));
        if (!$csrfTokenManager->isTokenValid($token)) {
            throw $this->createAccessDeniedException('invalid csrf token');
        }
        #searching product by id
        $prod=$entityManager->getRepository(Product::class)->find($data['prodId']);
        $user = $this->getUser();
        $roles=$user->getRoles();
        #if made by an admin he can chose which user want the order
        if (in_array('ROLE_ADMIN', $roles, true)) {
            $user= $entityManager->getRepository(User::class)->find($data['userId']);
        }
        $paymentId=null;
        $commonService=new CommonServices();
        #start transaction for making the order
        $entityManager->getConnection()->beginTransaction();
        try {
            #adding card infos if payement method is cash
            if ($data['method'] == 'Visa' || $data['method'] == 'MasterCard') {
                $inputFormat = 'Y-m-d';
                # Create a DateTimeImmutable object from the string
                $expdate = DateTime::createFromFormat('Y-m-d', $data['expDate']);

                $paymentMethodId = $commonService->addToPaymentMethod($entityManager, $data['accNumber'],$expdate, $user, $data['method']);
                $paymentId = $commonService->addPayment($entityManager, $paymentMethodId, $data['total'], 0);

            } else {
                $paymentMethodId = $commonService->addToPaymentMethod($entityManager, 0, null, $user, 'cash');
                $paymentId = $commonService->addPayment($entityManager, $paymentMethodId, $data['toGive'], $data['rest']);
            }
            #inserting order details
            $orderDetId=$commonService->addDetail($entityManager,$user,$data['total']);
            $orderId=$commonService->addOrder($entityManager,$prod,$orderDetId,$paymentId,$data['quantity'],$data['discount']);
            #updating storage
            $commonService->updateStorage($entityManager,$prod,$data['quantity']);
            #success message
            flash()->addFlash('success','order Made','order made succesfully');
            #sending mail with reciept invoice
            $mailServices->invoiceMail($twig,$mailer,$orderDetId->getUserId()->getEmail(),$orderId);
            $entityManager->getConnection()->commit();



            return $this->json(['orderId'=>$orderId]);
        }catch (\Exception $exception){
            $entityManager->getConnection()->rollBack();
            throw $exception;

        }
        return $this->json(['result'=>'success']);
    }

    #handle remove order request
    #[Route('/admin/orders/remove', name: 'remove_order')]
    public function removeOrder(EntityManagerInterface $entityManager, Request $request,UrlGeneratorInterface $urlGenerator):Response
    {
        #recieving the id and fetching if available product
        $ordeId = $request->query->get('orderId');
        if (!$ordeId) {
            flash()->addFlash('error', 'Empty', 'order to be removed not specified');


        }
        $orderToRemove = $entityManager->getRepository(Order::class)->find($ordeId);
        if (!$orderToRemove) {
            flash()->addFlash('error', 'Empty', 'order to be removed not found!!');
        }

        #removing the category
        $entityManager->remove($orderToRemove);
        $entityManager->flush();
        #success response
        flash()->addFlash('success', 'Removed', 'you successfuly removed the order');
        $urlGenerate=$urlGenerator->generate('app_orders');
        return $this->redirect($urlGenerate);
    }

}
