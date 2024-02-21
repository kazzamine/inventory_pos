<?php

namespace App\Controller;

use App\Service\MailServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Environment;

class FeaturesController extends AbstractController
{
    #render about us page
    #[Route('/use/aboutUs', name: 'app_aboutus')]
    public function aboutUs(): Response
    {
        return $this->render('features/aboutus.html.twig');
    }

    #render contact us page
    #[Route('/use/contactUs', name: 'app_contactus')]

    public function contactUs(MailServices $mailServices,Request $request,Environment $twig,MailerInterface $mailer):Response
    {
        $form=$this->createForm(\ContactusForm::class);
        $form->handleRequest($request);
        if($form->isSubmitted()){
            $subject=$form->get('message')->getData();
            $content=$form->get('message')->getData();
            $sender=$form->get('email')->getData();

            $mailServices->contactUsMessage($mailer,$twig,$sender,$subject,$content);

        }
        return $this->render('features/contactUs.html.twig',
        ['form'=>$form]);
    }
}
