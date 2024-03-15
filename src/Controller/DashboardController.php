<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Order;
use App\Entity\Product;
use App\Entity\User;
use App\Repository\ModelRepository;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DashboardController extends AbstractController
{
    # render admin dashboard
    #[Route('/user/dashboard', name: 'admin_dashboard')]
    public function adminDashboard(EntityManagerInterface $entityManager,OrderRepository $orderRepository): Response
    {
        # setting current user role for later search
        $userRole='ROLE_USER';
        $roles=$this->getUser()->getRoles();
        if (in_array('ROLE_ADMIN', $roles, true)) {
            $userRole='ROLE_ADMIN';
        }
        # count total users
        $totalUsers=count($entityManager->getRepository(User::class)->findAll());
        # count total orders
        $totalOrders=count($entityManager->getRepository(Order::class)->findAll());
        # get the monthly sale for each product
        $sales=$orderRepository->findByGroup();
        # last added orders
        $latestOrders=$entityManager->getRepository(Order::class)->findLastOrders();
        # last added products
        $latestProds=$entityManager->getRepository(Product::class)->findLastProducts();
        # last added categories
        $latestCats=$entityManager->getRepository(Category::class)->findLastCategories();
        return $this->render('admin/dashboard.html.twig',[
            'sales'=>$sales,
            'totalUsers'=>$totalUsers,
            'totalOrders'=>$totalOrders,
            'userRole'=>$userRole,
            'latestOrders'=>$latestOrders,
            'latestProducts'=>$latestProds,
            'latestCats'=>$latestCats
        ]);
    }
    //render user dashboard
    #[Route('/user/dashboard', name: 'user_dashboard')]
    public function userDashboard(ModelRepository $modRepo): Response
    {
        return $this->render('user/dashboard.html.twig');
    }
}
