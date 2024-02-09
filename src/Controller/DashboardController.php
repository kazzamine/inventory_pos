<?php

namespace App\Controller;

use App\Repository\ModelRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'app_dashboard')]
    public function index(ModelRepository $modRepo): Response
    {
        $user=$this->getUser();
        $modelRepo=null;
        if($user)
        {
         $userRole=$user->getRoles();
         $modelRepo=$modRepo->findByRole($userRole);

        }

        return $this->render('dashboard.html.twig',[
            'navbarItems' => $modelRepo,
        ]);
    }
}
