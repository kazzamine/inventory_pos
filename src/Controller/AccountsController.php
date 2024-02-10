<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
#[Route('/admin')]
class AccountsController extends AbstractController
{
    #[Route('/accounts', name: 'app_accounts')]
    public function index(UserRepository $userRepository,PaginatorInterface $paginator,Request $request): Response
    {

        return $this->render('admin/createAccounts.html.twig');
    }

    #[Route('/accounts/adduser','add_user')]
    public function createUser(Request $request):JsonResponse
    {
        $RequestedData=$request->get('data');
        $data=json_decode($RequestedData);

        return $this->json([

        ]);
    }

}
