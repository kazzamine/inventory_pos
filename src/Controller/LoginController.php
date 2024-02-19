<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;




class LoginController extends AbstractController
{
    #render alogin page
    #handles login action
    #[Route('/', name: 'app_login')]
    public function index(AuthenticationUtils $authenticationUtils,UrlGeneratorInterface $urlGenerator): Response
    {

        $user=$this->getUser();
        $error=$authenticationUtils->getLastAuthenticationError();
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
}
