<?php

namespace App\Controller;

use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SalesController extends AbstractController
{
    #[Route('/admin/monthlysales', name: 'app_monthly_sales')]
    public function index(EntityManagerInterface $entityManager,OrderRepository $orderRepository): Response
    {
        //get the monthly sale for each product
        $sales=$orderRepository->findByGroup();
        return $this->render('admin/monthlySales.html.twig',[
            'sales'=>$sales
        ]);
    }

    #[Route('/admin/compareSale', name: 'app_compare_sales')]
    public function compareSales(EntityManagerInterface $entityManager,OrderRepository $orderRepository): Response
    {
        //get the monthly sale for each product
        $sales=$orderRepository->findByGroup();
        return $this->render('admin/sales/monthlySales.html.twig',[
            'sales'=>$sales
        ]);
    }
}
