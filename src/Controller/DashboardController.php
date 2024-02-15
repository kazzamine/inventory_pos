<?php

namespace App\Controller;

use App\Entity\Order;
use App\Repository\ModelRepository;
use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class DashboardController extends AbstractController
{
    //render admin dashboard
    #[Route('/admin/dashboard', name: 'admin_dashboard')]
    public function adminDashboard(EntityManagerInterface $entityManager,OrderRepository $orderRepository): Response
    {
        //get the monthly sale for each product
        $sales=$orderRepository->findByGroup();
        return $this->render('admin/dashboard.html.twig',[
            'sales'=>$sales
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
