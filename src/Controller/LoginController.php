<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\newPasswordForm;
use App\Form\ResetPasswordForm;
use App\Service\MailServices;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactory;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Twig\Environment;


class LoginController extends AbstractController
{
    #render alogin page
    #handles login action
    #[Route('/', name: 'app_login')]
    public function index(AuthenticationUtils $authenticationUtils,UrlGeneratorInterface $urlGenerator): Response
    {
        # if user is logged
        $user=$this->getUser();
        # error of authentication if there is any
        $error=$authenticationUtils->getLastAuthenticationError();
        # last email used
        $last_username=$authenticationUtils->getLastUsername();
        $user_role=null;
        $role='ROLE_USER';
        #if already signed redirect to dashboard
        $securityContext = $this->container->get('security.authorization_checker');
        if ($securityContext->isGranted('IS_AUTHENTICATED_REMEMBERED')) {
            $urlGenerate=$urlGenerator->generate('admin_dashboard');
            return $this->redirect($urlGenerate);
            }
        #check if logged credentials matches existing user
        if($user instanceof UserInterface){
            flash()->addFlash('success','logged in','you successfuly logged in!!');
            $user_role=$user->getRoles();
        }
        #check if there is an error
        if ($error) {
            flash()->addFlash('warning', $error->getMessage(), 'retry again');
        }
        if($user_role!=null){
            if (in_array('ROLE_ADMIN', $user_role, true)) {
                $role='ROLE_ADMIN';
            }
        }
        return $this->render('login/index.html.twig', [
            'messageerr' => $error,
            'user_role'=>$role,
            'last_username'=>$last_username
        ]);
    }

    #forget password
    #[Route('/forgetpass',name: 'forget_password')]
    public function forgotPassword(EntityManagerInterface $entityManager,Request $request,Environment $twig,MailerInterface $mailer,MailServices $mailServices)
    {
        $form=$this->createForm(ResetPasswordForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $user=$entityManager->getRepository(User::class)->findOneBy(['email'=>$form->get('email')->getData()]);
            if(!$user){
                flash()->addFlash('error',"no user found with this mail");
                return $this->render('features/forgetPwd.html.twig',
                    [
                        'form'=>$form
                    ]);
            }
            $mailServices->resetPassword($mailer,$twig,$form->get('email')->getData());

        }
        return $this->render('features/forgetPwd.html.twig',
        [
            'form'=>$form
        ]);
    }

    #reset password
    #[Route('/resetmdp',name: 'reset_mdp')]
    public function resetMdp(UrlGeneratorInterface $urlGenerator,Request $request,MailerInterface $mailer,MailServices $mailServices,EntityManagerInterface $entityManager){
        $form=$this->createForm(newPasswordForm::class);
        $form->handleRequest($request);
        $email=$request->query->get('mail');
        if ($form->isSubmitted()) {

            #searching for the user by mail
            $user=$entityManager->getRepository(User::class)->findOneBy(['email'=>$email]);
            if(!$user){
                flash()->addFlash('error',"no user found with this mail");
                return $this->render('features/resetMdp.html.twig',
                    [
                        'form'=>$form
                    ]);
            }
            #crypting password
            $passwordHasherFactory= new PasswordHasherFactory([
                'common' => ['algorithm' => 'bcrypt']
            ]);
            $passwordHasher = $passwordHasherFactory->getPasswordHasher('common');
            $user->setPassword($passwordHasher->hash( $form->get('password')->getData()));
            $entityManager->persist($user);
            $entityManager->flush();
            //alerting mail
            $mailServices->alertMdpChanged($mailer,$email);
            $urlGenerate=$urlGenerator->generate('app_login');
            return $this->redirect($urlGenerate);
        }
        return $this->render('features/resetMdp.html.twig',
            [
                'form'=>$form
            ]);

    }
}
