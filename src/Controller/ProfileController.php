<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class ProfileController extends AbstractController
{
    #[Route('/user/profile', name: 'app_profile')]
    public function UserProfile(UserRepository $userRepository): Response
    {
        //getting current user
        $userId=$this->getUser()->getUserIdentifier();
        $user=$userRepository->findOneBy(['username'=>$userId]);
        return $this->render('user/profile.html.twig',[
            'userInfo' =>$user,
        ]);
    }
    #[Route('/user/profile/update', name: 'update_profile')]
    public function updateProfile(EntityManagerInterface $entityManager,Request $request,CsrfTokenManagerInterface $csrfTokenManager): Response
    {
        $jsonData=json_decode($request->getContent(),true);
        $csrfToken=new CsrfToken('updateUser',$request->headers->get('X-CSRF-TOKEN'));
        if (!$csrfTokenManager->isTokenValid($csrfToken)) {
            throw $this->createAccessDeniedException('invalid csrf token');
        }
        if (!$jsonData) {
            return $this->json(['error' => 'empty'], 400);
        }
        $useID=$jsonData['id'];
        $user=$entityManager->getRepository(User::class)->find($useID);
        $user->setUsername($jsonData['username']);
        $user->setFirstName($jsonData['firstname']);
        $user->setLastName($jsonData['lastname']);
        $user->setAdress($jsonData['address']);
        $user->setPhone($jsonData['phone']);
        $user->setCity($jsonData['city']);
        try{
            $entityManager->persist($user);
            $entityManager->flush();
        }catch ( ORMException $exception){
            $this->json(['exception'=>$exception->getMessage()]);
        }

        return $this->json(['success'=>'updated successfully!!']);
    }
}
