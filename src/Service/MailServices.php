<?php
namespace App\Service;


use App\Repository\OrderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;
use Twig\Environment;

class MailServices{
    //mail when registered
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

    //mail to change forgotten password
    public function resetPassword(MailerInterface $mailer,Environment $twig,$sendTo){
        $subject='Reset Password';
        $content='Here u can resetur password';

        $mail = (new Email())
            ->from('sogorugeto7@gmail.com')
            ->to($sendTo)
            ->subject($subject)
            ->html(
                $twig->render('mail/resetPassword.html.twig', [
                    'subject' => $subject, 'content' => $content,'mail'=>$sendTo
                ])
            );
        try{
            $mailer->send($mail);
        }catch (TransportExceptionInterface $exception){
            return $exception;
        }
    }

    //mail to change forgotten password
    public function alertMdpChanged(MailerInterface $mailer,$sendTo){
        $subject='your password has been reset';
        $content='your password has been reset REMMEMBERRR IIITT';

        $mail = (new Email())
            ->from('sogorugeto7@gmail.com')
            ->to($sendTo)
            ->subject($subject)
            ->html($content
            );
        try{
            $mailer->send($mail);
        }catch (TransportExceptionInterface $exception){
            return $exception;
        }
    }

    //order invoice
    public function invoiceMail(OrderRepository $orderRepo,Environment $twig,MailerInterface $mailer,$sendTo,$order){
        $subject='Order Invoice';
        $orderMadeDet=$orderRepo->find($order);
        $mail = (new Email())
            ->from('sogorugeto7@gmail.com')
            ->to($sendTo)
            ->subject($subject)
            ->html(
                $twig->render('mail/sendReceipt.html.twig', [
                    'order'=>$order,'subject'=>$subject,'orderMade'=>$orderMadeDet
                ])
            );
        try{
            $mailer->send($mail);
        }catch (TransportExceptionInterface $exception){
            return $exception;
        }
    }

    #contact us sending message
    public function contactUsMessage(MailerInterface $mailer,$sender,$subject,$content){

        $mail = (new Email())
            ->from($sender)
            ->to('sogorugeto7@gmail.com')
            ->subject($subject)
            ->html($content);
        try{
            $mailer->send($mail);
        }catch (TransportExceptionInterface $exception){
            return $exception;
        }
    }
}