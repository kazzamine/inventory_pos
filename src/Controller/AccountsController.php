<?php

namespace App\Controller;

use App\Entity\Roles;
use App\Entity\User;
use App\Form\CreateUserForm;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
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
    public function index(Request $request,EntityManagerInterface $entityManager,PaginatorInterface $paginator): Response
    {
        //getting all users
        $allUsers=$entityManager->getRepository(User::class)->findAll();
        //search
        $searchTerm = $request->query->get('search', '');
        $searchedData = $entityManager->getRepository(User::class)->findBySearchTerm($searchTerm);
        //sorting
        $sortBy = $request->query->get('sort_by', 'username');
        $sortOrder = $request->query->get('sort_order', 'asc');
        $currentPage = !$request->get('page') ? 1 : $request->get('page');
        $allUsers = $entityManager->getRepository(User::class)->findBy([], [$sortBy => $sortOrder]);
        //paginating
        $paginat = $paginator->paginate($allUsers, $currentPage, 10);

        if($searchTerm!=''){
            $paginat = $paginator->paginate($searchedData, $currentPage, 10);
        }

        //creating user
        $user =new User();
        $form=$this->createForm(CreateUserForm::class,$user);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $imageFile = $form->get('picture')->getData();
            if ($imageFile) {
                $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = $originalFilename . '-' . uniqid() . '.' . $imageFile->guessExtension();
                $imageFile->move(
                    $this->getParameter('image_directory'),
                    $newFilename
                );
                $user->setPicture($newFilename);
            }

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
            'allUser'=>$paginat,
            'sort_by' => $sortBy,
            'sort_order' => $sortOrder,
            'search_term'=>$searchTerm]
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
