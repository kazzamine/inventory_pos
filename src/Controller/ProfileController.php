<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactory;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class ProfileController extends AbstractController
{
    # rendering profile page
    #[Route('/user/profile', name: 'app_profile')]
    public function UserProfile(UserRepository $userRepository): Response
    {
        # getting current user
        $userId=$this->getUser()->getUserIdentifier();
        $user=$userRepository->findOneBy(['email'=>$userId]);

        return $this->render('user/profile.html.twig',[
            'userInfo' =>$user
        ]);
    }
    # update user profile information
    #[Route('/user/profile/update', name: 'update_profile')]
    public function updateProfile(EntityManagerInterface $entityManager,Request $request,CsrfTokenManagerInterface $csrfTokenManager): Response
    {
        # decoding received data from ajax
        $jsonData=json_decode($request->getContent(),true);
        # checking csrf token
        $csrfToken=new CsrfToken('updateUser',$request->headers->get('X-CSRF-TOKEN'));
        if (!$csrfTokenManager->isTokenValid($csrfToken)) {
            throw $this->createAccessDeniedException('invalid csrf token');
        }
        if (!$jsonData) {
            return $this->json(['error' => 'empty'], 400);
        }
        # updating data with the new received one
        $useID=$jsonData['id'];
        $user=$entityManager->getRepository(User::class)->find($useID);
        $user->setUsername($jsonData['username']);
        $user->setFirstName($jsonData['firstname']);
        $user->setLastName($jsonData['lastname']);
        $user->setAdress($jsonData['address']);
        $user->setPhone($jsonData['phone']);
        $user->setCity($jsonData['city']);
        //check if pic is changed
//        $imageFile=$jsonData['picture'];
//
//        if($imageFile){
//            $newFilename = $jsonData['username'] . '-' . uniqid() . '.' . $imageFile->guessExtension();
//            $imageFile->move(
//                $this->getParameter('image_directory'),
//                $newFilename
//            );
//            $user->setPicture($newFilename);
//        }
        try{
            $entityManager->persist($user);
            $entityManager->flush();
        }catch ( ORMException $exception){
            $this->json(['exception'=>$exception->getMessage()]);
        }

        return $this->json(['success'=>'updated successfully!!']);
    }

    # render change password view
    #[Route('/user/profile/changepwd', name: 'app_changepwd')]
    public function changepwd(UserRepository $userRepository): Response
    {
        # getting current user
        $userId=$this->getUser()->getUserIdentifier();
        $user=$userRepository->findOneBy(['email'=>$userId]);

        return $this->render('user/updatePassword.html.twig',[
            'userInfo' =>$user
        ]);
    }

    # change password action
    #[Route('/user/profile/changepsd', name: 'change_password')]
    public function changePassword(UrlGeneratorInterface $urlGenerator,EntityManagerInterface $entityManager,Request $request,CsrfTokenManagerInterface $csrfTokenManager): Response
    {
        # generate redirecting route
        $URL=$urlGenerator->generate('app_changepwd');
        # check csrf token
        $csrfToken=new CsrfToken('updatePassword',$request->query->get('_csrf_token_pwd'));
        if (!$csrfTokenManager->isTokenValid($csrfToken)) {
            throw $this->createAccessDeniedException('invalid csrf token');
        }
        # get the user
        $useID=$request->query->get('userId');
        $user=$entityManager->getRepository(User::class)->find($useID);
        # hashing password
        $passwordHasherFactory= new PasswordHasherFactory([
            'common' => ['algorithm' => 'bcrypt']
        ]);
        $passwordHasher = $passwordHasherFactory->getPasswordHasher('common');
        $newPassword=$passwordHasher->hash($request->query->get('newPassword'));
        # check if new password is same as the old one
        if($newPassword==$user->getPassword()){
            flash()->addFlash('warning', 'exist', 'new password can\'t be same as old password');
            return $this->redirect($URL);
        }
        # updating password
        $user->setPassword($newPassword);
        try{
            $entityManager->persist($user);
            $entityManager->flush();
            flash()->addFlash('success', 'password changed', 'your password has changed , REMEMBER IT!!!');

        }catch ( ORMException $exception){
           throw new  $exception();
        }
        return $this->redirect($URL);
    }
}
