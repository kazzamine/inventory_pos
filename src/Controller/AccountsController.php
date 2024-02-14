<?php

namespace App\Controller;

use App\Entity\Roles;
use App\Entity\User;
use App\Form\CreateUserForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactory;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

#[Route('/admin')]
class AccountsController extends AbstractController
{
    #[Route('/accounts/create', name: 'app_accounts_create')]
    public function index(Request $request,EntityManagerInterface $entityManager): Response
    {
        $allUsers=$entityManager->getRepository(User::class)->findAll();


        $user =new User();
        $form=$this->createForm(CreateUserForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $picture=file_get_contents($form->get('picture')->getData());
            $user->setPicture(base64_encode($picture));
            $user->setUsername($form->get('username')->getData());
            $user->setEmail($form->get('email')->getData());
            $user->setFirstName($form->get('firstname')->getData());
            $user->setLastName($form->get('lastname')->getData());
            $user->setAdress($form->get('adress')->getData());
            $user->setPhone($form->get('phone')->getData());
            $user->setCity($form->get('city')->getData());
            $role=$entityManager->getRepository(Roles::class)->find($form->get('roleId')->getData());
            $user->setRoleId($role);
            $user->setRoles( array('role'=>$role->getRoleName()) );
            $password=$form->get('password')->getData();
            //crypting password
            $passwordHasherFactory= new PasswordHasherFactory([
                'common' => ['algorithm' => 'bcrypt']
            ]);
            $passwordHasher = $passwordHasherFactory->getPasswordHasher('common');
            $user->setPassword($passwordHasher->hash( $form->get('password')->getData()));
            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirect($request->getUri());
        }
        return $this->render('admin/createAccounts.html.twig',
        ['form'=>$form,
            'allUser'=>$allUsers]
        );
    }


    #[Route('/accounts/remove','remove_user')]
    public function removeUser(Request $request,EntityManagerInterface $entityManager,UrlGeneratorInterface $urlGenerator):Response
{
        $urlGenerate=$urlGenerator->generate('app_accounts_create');
        $userId=$request->query->get('userId');
        if(!$userId){
            flash()->addFlash('error', 'Empty', 'user to be removed not specified');
            return $this->redirect($urlGenerate);

        }
        $userToRemove=$entityManager->getRepository(User::class)->find($userId);
        if(!$userToRemove){
            flash()->addFlash('error','not found','User doesn\'t Exist!!');
            return $this->redirect($urlGenerate);

        }
        $entityManager->remove($userToRemove);
        $entityManager->flush();
        flash()->addFlash('success','user Removed','User removed succesfully');

    return $this->redirect($urlGenerate);
    }

}
