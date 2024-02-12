<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProviderController extends AbstractController
{
    #[Route('/admin/provider', name: 'app_provider_list')]
    public function index(): Response
    {
        return $this->render('admin/providers.html.twig');
    }
}
