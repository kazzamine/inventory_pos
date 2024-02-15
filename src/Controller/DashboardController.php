<?php

namespace App\Controller;

use App\Entity\Order;
use App\Repository\ModelRepository;
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
    public function adminDashboard(EntityManagerInterface $entityManager,ChartBuilderInterface $builder): Response
    {
        $sales=$entityManager->getRepository(Order::class)->findAll();

        $chart=$builder->createChart(Chart::TYPE_BAR);
        $chart->setData(
            [
                'labels'=>['january','february','march'],
                'datasets'=>[
                    'data'=>[0,5,80]
                ]
            ]
        );
        $chart->setOptions([
            'scales' => [
                'y' => [
                    'suggestedMin' => 0,
                    'suggestedMax' => 100,
                ],
            ],
        ]);
        return $this->render('admin/dashboard.html.twig',[
            'chart'=>$chart
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
