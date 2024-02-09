<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AccountsController extends AbstractController
{
    #[Route('/admin/accounts', name: 'app_accounts')]
    public function index(): Response
    {
        return $this->render('admin/createAccounts.html.twig');
    }
}
