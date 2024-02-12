<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;




class LoginController extends AbstractController
{
    #[Route('/', name: 'app_login')]
    public function index(AuthenticationUtils $authenticationUtils): Response
    {
        $user=$this->getUser();
        $error=$authenticationUtils->getLastAuthenticationError();
        $user_role=null;
        #check if logged credentials matches existing user
        if($user instanceof UserInterface){
            flash()->addFlash('success','logged in','you successfuly logged in!!');
            $user_role=$user->getRoles();

        }
        #check if there is an error
            if ($error) {
                flash()->addFlash('warning', $error->getMessage(), 'retry again');
            }

        return $this->render('login/index.html.twig', [
            'messageerr' => $error,
            'user_role'=>$user_role
        ]);
    }
}
