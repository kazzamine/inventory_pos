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
        try {
        if($form->isSubmitted()){
            $subject=$form->get('subject')->getData();
            $content=$form->get('message')->getData();
            $sender=$form->get('email')->getData();
            # sending mail
            $mailServices->contactUsMessage($mailer,$sender,$subject,$content);
            flash()->addFlash('success','mail sent','your request has been sent, we will reply as soon as possible');
            return $this->render('features/contactUs.html.twig',
                ['form'=>$form]);
        }
        }catch (\Exception $ex){
            flash()->addFlash('error',$ex->getCode(),$ex->getMessage());

        }
        return $this->render('features/contactUs.html.twig',
        ['form'=>$form]);
    }

    #render about FAQ
    #[Route('/user/faq', name: 'app_faq')]
    public function faq(): Response
    {
        return $this->render('features/faqPage.html.twig');
    }

}
