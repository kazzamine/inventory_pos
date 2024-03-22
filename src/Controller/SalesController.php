<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\Product;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SalesController extends AbstractController
{
    # render monthly sales page
    #[Route('/admin/monthlysales', name: 'app_monthly_sales')]
    public function index(EntityManagerInterface $entityManager,OrderRepository $orderRepository): Response
    {
        # get the monthly sale for each product
        $sales=$orderRepository->findByGroup();
        return $this->render('admin/sales/monthlySales.html.twig',[
            'sales'=>$sales
        ]);
    }

    # render compare sales view
    #[Route('/admin/compareSale', name: 'app_compare_sales')]
    public function compareSales(EntityManagerInterface $entityManager,OrderRepository $orderRepository): Response
    {
        $allProducts=$entityManager->getRepository(Product::class)->findAll();
        # get the monthly sale for each product
        return $this->render('admin/sales/compareSales.html.twig',[
            'products'=>$allProducts
        ]);
    }

    # handle ajax request for comparing
    #[Route('/admin/compareSale/getProd', name:'comapre_sales')]
    public function getProdSales(Request $request,EntityManagerInterface $entityManager):Response
    {
        # getting selected products id
        $prodId1=$request->query->get('prodId1');
        $prodId2=$request->query->get('prodId2');
        # finding sales of the products
        $prodSale1=$entityManager->getRepository(Order::class)->findByProd($prodId1);
        $prodSale2=$entityManager->getRepository(Order::class)->findByProd($prodId2);
        return $this->json(['salesData1'=>$prodSale1,'salesData2'=>$prodSale2]);
    }
}