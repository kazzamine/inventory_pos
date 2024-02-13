<?php

namespace App\Controller;

use App\Repository\ModelRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class DashboardController extends AbstractController
{
    //render admin dashboard
    #[Route('/admin/dashboard', name: 'admin_dashboard')]
    public function adminDashboard(ModelRepository $modRepo): Response
    {
        return $this->render('admin/dashboard.html.twig',[

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
