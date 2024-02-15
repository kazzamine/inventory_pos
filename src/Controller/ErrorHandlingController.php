<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ErrorHandlingController extends AbstractController
{
    #[Route('/error403', name: 'error403')]
    public function error403():Response
    {
        return $this->render('Bundles/TwigBundle/Exception/error403.html.twig',[]);
    }
}
