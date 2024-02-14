<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\Provider;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use App\Service\CommonServices;
use Doctrine\ORM\EntityManagerInterface;
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
    public function orderList(OrderRepository $orderRepository): Response
    {

        return $this->render('admin/ordersList.html.twig');
    }

    #[Route('/user/orders',name: 'user_orders')]
    public function userOrders():Response
    {
        return $this->render('user/ordersList.html.twig');
    }
    //make order view
    #[Route('/user/orders/makeOrder/view', name: 'app_make_order')]
    public function makeOrderView(EntityManagerInterface $entityManager):Response
    {
        $allProducts=$entityManager->getRepository(Product::class)->findAll();
        $providers=$entityManager->getRepository(Provider::class)->findAll();
        return $this->render('user/makeOrder.html.twig',
        ['products'=>$allProducts,
            'providers'=>$providers
        ]);
    }
    //fetch product by id
    #[Route('/user/prodbyid',name:'prod_by_id')]
    public function productById (Request $request,ProductRepository $productRepository):Response
    {
        $prod_id=$request->query->get('prodId');
        $searchedProd=$productRepository->find("1");
        $retData=(['price'=>$searchedProd->getPrice(),'desc'=>$searchedProd->getProdDesc(),'tax'=>$searchedProd->getTax()]);
        return $this->json($retData);
    }

    //calculateTotal
    #[Route('user/order/total',name: 'app_order_total')]
    public function calculateTotal(EntityManagerInterface $entityManager,Request $request):Response
    {
        $data=json_decode($request->getContent(),true);
        $prod=$entityManager->getRepository(Product::class)->find($data['prodId']);

        $tax=($prod->getPrice()*$prod->getTax())/100;
        $discountValue=0;
        if($data['quantity']>=5){
            $discountValue=15;
        }
        $totalTax=($prod->getPrice()+$tax)*$data['quantity'];
        $discount=($totalTax*$discountValue)/100;
        $total=$totalTax-$discount;
        return $this->json(['total'=>$total,'discount'=>$discountValue]);
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
        $paymentId=null;
        $commonService=new CommonServices();
        $entityManager->getConnection()->beginTransaction();
        try {

            if ($data['method'] == 'Visa' || $data['method'] == 'MasterCard') {
                $paymentMethodId = $commonService->addToPaymentMethod($entityManager, $data['accNumber'], $data['expDate'], $user, $data['method']);
                $paymentId = $commonService->addPayment($entityManager, $paymentMethodId, $data['total'], 0);

            } else {
                $paymentMethodId = $commonService->addToPaymentMethod($entityManager, 0, null, $user, 'cash');
                $paymentId = $commonService->addPayment($entityManager, $paymentMethodId, $data['toGive'], $data['rest']);

            }
            $orderDetId=$commonService->addDetail($entityManager,$user,$data['total']);
            $commonService->addOrder($entityManager,$prod,$orderDetId,$paymentId,$data['quantity'],$data['discount']);
            flash()->addFlash('success','order Made','order made succesfully');
            $entityManager->getConnection()->commit();
        }catch (\Exception $exception){
            $entityManager->getConnection()->rollBack();
            throw $exception;

        }
        return $this->json(['result'=>'success']);
    }
}
