<?php

namespace App\Controller;

use App\Form\ContactusForm;
use App\Service\MailServices;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Attribute\Route;

class FeaturesController extends AbstractController
{
    #render about us page
    #[Route('/user/aboutUs', name: 'app_aboutus')]
    public function aboutUs(): Response
    {
        return $this->render('features/aboutus.html.twig');
    }

    #render contact us page
    #[Route('/user/contactUs', name: 'app_contactus')]

    public function contactUs(MailServices $mailServices,Request $request,MailerInterface $mailer):Response
    {
        $form=$this->createForm(ContactusForm::class);
        $form->handleRequest($request);
        # submitting contact us
        if($form->isSubmitted()){
            $subject=$form->get('subject')->getData();
            $content=$form->get('message')->getData();
            $sender=$form->get('email')->getData();
            # sending mail
            $mailServices->contactUsMessage($mailer,$sender,$subject,$content);
            return $this->render('features/contactUs.html.twig',
                ['form'=>$form]);
        }
        return $this->render('features/contactUs.html.twig',
        ['form'=>$form]);
    }

}
