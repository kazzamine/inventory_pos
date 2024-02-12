<?php

namespace App\Controller;

use App\Entity\Model;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class ModelController extends AbstractController
{
    //render model view
    #[Route('/admin/model/list', name: 'app_model')]
    public function listModel(): Response
    {
        return $this->render('admin/model.html.twig');
    }
    //update model
    #[Route('/admin/model/list/update', name: 'app_model_update')]
    public function updateModel(): Response
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/ModelController.php',
        ]);
    }
    //remove model
    #[Route('/admin/model/list/remove', name: 'app_model_remove')]
    public function removeModel(Request $request,EntityManagerInterface $entityManager,UrlGeneratorInterface $urlGenerator): Response
    {
        $modId = $request->query->get('modId');

        if (!$modId) {
            flash()->addFlash('error', 'Empty', 'model to be removed not specified');
        }
        $modelToRemove = $entityManager->getRepository(Model::class)->find($modId);
        if (!$modelToRemove) {
            flash()->addFlash('error', 'Empty', 'model to be removed not found!!');
        }

        //removing the category
        $entityManager->remove($modelToRemove);
        $entityManager->flush();
        //success response
        flash()->addFlash('success', 'Removed', 'you successfuly removed the model');
        $urlGenerate = $urlGenerator->generate('app_model');
        return $this->redirect($urlGenerate);
    }
    //add model
    #[Route('/admin/model/list/add', name: 'app_model_add')]
    public function addModel(Request $request,EntityManagerInterface $entityManager,CsrfTokenManagerInterface $tokenStorage): Response
    {
        $data=json_decode($request->getContent(),true);
        $csrfToken =new CsrfToken('addModel',$request->headers->get('X-CSRF-TOKEN'));
        if(!$tokenStorage->isTokenValid($csrfToken)){
            throw $this->createAccessDeniedException();
        }

        $newModel=new Model();
        $newModel->setModName($data['modName']);
        $newModel->setIcon($data['modIcon']);
        $newModel->setPath($data['modPath']);
        $newModel->setRole($data['modRole']);
        try{
            $entityManager->persist($newModel);
            $entityManager->flush();
        }catch (ORMException $exception){
            throw new \Exception( $exception->getMessage());
        }


        return $this->json(['success'=>'added successfully']);
    }

}
