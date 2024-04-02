<?php

namespace App\Controller;

use App\Entity\Roles;
use App\Entity\User;
use App\Form\CreateUserForm;
use App\Service\MailServices;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactory;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Twig\Environment;

#[Route('/admin')]
class AccountsController extends AbstractController
{   #render create and listing user accounts page
    #[Route('/accounts/list', name: 'app_accounts_list')]
    public function listAccounts(Request $request,EntityManagerInterface $entityManager,PaginatorInterface $paginator): Response
    {
        #getting all users
        $allUsers=$entityManager->getRepository(User::class)->findAll();
        #search
        $searchTerm = $request->query->get('search', '');
        $searchedData = $entityManager->getRepository(User::class)->findBySearchTerm($searchTerm);
        #sorting
        $sortBy = $request->query->get('sort_by', 'username');
        $sortOrder = $request->query->get('sort_order', 'asc');
        $currentPage = !$request->get('page') ? 1 : $request->get('page');
        $allUsers = $entityManager->getRepository(User::class)->findBy(['role_id'=>3], [$sortBy => $sortOrder]);
        #paginating
        $paginat = $paginator->paginate($allUsers, $currentPage, 10);

        if($searchTerm!=''){
            $paginat = $paginator->paginate($searchedData, $currentPage, 10);
        }


        return $this->render('admin/users/listUsers.html.twig',
            [
                'allUser'=>$paginat,
                'sort_by' => $sortBy,
                'sort_order' => $sortOrder,
                'search_term'=>$searchTerm]
        );
    }
    #handles add user action
    #[Route('/accounts/create', name: 'app_accounts_create')]
    public function index(Environment $twig,MailerInterface $mailer,MailServices $mailServices,Request $request,EntityManagerInterface $entityManager): Response
    {
        #creating user
        $user =new User();
        $form=$this->createForm(CreateUserForm::class);
        $form->handleRequest($request);
        # submitting form
        try {
            if ($form->isSubmitted() && $form->isValid()) {
                # setting user attrs
                $user->setUsername($form->get('username')->getData());
                $user->setFirstName($form->get('firstname')->getData());
                $user->setLastName($form->get('lastname')->getData());
                $user->setEmail($form->get('email')->getData());
                $user->setAdress($form->get('adress')->getData());
                $user->setCity($form->get('city')->getData());
                $user->setPhone($form->get('phone')->getData());
                #adding image
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
                # setting user role
                $role = $entityManager->getRepository(Roles::class)->findOneBy(['id' => $form->get('roleId')->getData()]);
                //dd($role);
                $user->setRoleId($role);
                $user->setRoles(array('role' => $role->getRoleName()));
                $password = $form->get('password')->getData();
                #crypting password
                $passwordHasherFactory = new PasswordHasherFactory([
                    'common' => ['algorithm' => 'bcrypt']
                ]);
                $passwordHasher = $passwordHasherFactory->getPasswordHasher('common');
                $user->setPassword($passwordHasher->hash($form->get('password')->getData()));
                $entityManager->persist($user);
                $entityManager->flush();

                //sending confirmation mail
                $mailServices->sendCreateAcc($mailer, $twig, $form->get('email')->getData(), $password);


                return $this->redirect($request->getUri());
            }
        }catch (\Exception $ex){
            flash()->addFlash('error',$ex->getCode(),$ex->getMessage());

        }
        return $this->render('admin/users/createAccounts.html.twig',
        ['form'=>$form]
        );
    }

    #handle remove account request
    #[Route('/accounts/remove','remove_user')]
    public function removeUser(Request $request,EntityManagerInterface $entityManager,UrlGeneratorInterface $urlGenerator):Response
    {   # generating return url after successful remove
        $urlGenerate=$urlGenerator->generate('app_accounts_list');
        $userId=$request->query->get('userId');
        # check if user is selected
        if(!$userId){
            flash()->addFlash('error', 'Empty', 'user to be removed not specified');
            return $this->redirect($urlGenerate);

        }
        # searching for selected user
        $userToRemove=$entityManager->getRepository(User::class)->find($userId);
        if(!$userToRemove){
            flash()->addFlash('error','not found','User doesn\'t Exist!!');
            return $this->redirect($urlGenerate);

        }
        try{
        $entityManager->remove($userToRemove);
        $entityManager->flush();
        flash()->addFlash('success','user Removed','User removed succesfully');
        }catch (\Exception $ex){
            flash()->addFlash('error',$ex->getCode(),$ex->getMessage());

        }
    return $this->redirect($urlGenerate);
    }

}
