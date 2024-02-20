<?php
namespace App\Service;


use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;
use Twig\Environment;

class MailServices{

    public function sendCreateAcc(MailerInterface $mailer,Environment $twig,$sendTo,$password){
        $subject='Account Created';
        $content='your new account was created successfully here is your password \n password : '.$password;

        $mail=(new Email())
            ->from('sogorugeto7@gmail.com')
            ->to($sendTo)
            ->subject($subject)
            ->html(
                $twig->render('mail/createAccMail.html.twig',[
                    'subject'=>$subject,'content'=>$content
                ])
            );
        try{
            $mailer->send($mail);
        }catch (TransportExceptionInterface $exception){
            return $exception;
        }
    }
}