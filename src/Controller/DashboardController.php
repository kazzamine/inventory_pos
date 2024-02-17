<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\User;
use App\Repository\ModelRepository;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DashboardController extends AbstractController
{
    //render admin dashboard
    #[Route('/user/dashboard', name: 'admin_dashboard')]
    public function adminDashboard(EntityManagerInterface $entityManager,OrderRepository $orderRepository): Response
    {
        $userRole='ROLE_USER';
        $roles=$this->getUser()->getRoles();
        if (in_array('ROLE_ADMIN', $roles, true)) {
            $userRole='ROLE_ADMIN';
        }
        //total users
        $totalUsers=count($entityManager->getRepository(User::class)->findAll());
        //total orders
        $totalOrders=count($entityManager->getRepository(Order::class)->findAll());
        //get the monthly sale for each product
        $sales=$orderRepository->findByGroup();
        //last added orders
        $latestOrders=$entityManager->getRepository(Order::class)->findLastOrders();
        return $this->render('admin/dashboard.html.twig',[
            'sales'=>$sales,
            'totalUsers'=>$totalUsers,
            'totalOrders'=>$totalOrders,
            'userRole'=>$userRole,
            'latestOrders'=>$latestOrders
        ]);
    }
    //render user dashboard
    #[Route('/user/dashboard', name: 'user_dashboard')]
    public function userDashboard(ModelRepository $modRepo): Response
    {
        return $this->render('user/dashboard.html.twig',[

        ]);
    }
}
