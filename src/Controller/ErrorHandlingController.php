<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ErrorHandlingController extends AbstractController
{
    # rendring 403 error page
    #[Route('/error403', name: 'error403')]
    public function error403():Response
    {
        return $this->render('bundles/TwigBundle/Exception/error403.html.twig',[]);
    }
}
