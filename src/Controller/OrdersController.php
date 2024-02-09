<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class OrdersController extends AbstractController
{
    #[Route('/admin/orders', name: 'app_orders')]
    public function index(): Response
    {
        return $this->render('admin/ordersList.html.twig');
    }

    #[Route('/user/orders',name: 'user_orders')]
    public function userOrders():Response
    {
        return $this->render('user/ordersList.html.twig');
    }

    public function makeOrderView():Response
    {
        return $this->render('user/makeOrder.html.twig');
    }
}
