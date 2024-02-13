<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\Provider;
use App\Repository\OrderRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;


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
}
