<?php

namespace App\Controller;

use App\Entity\Model;
use App\Entity\SubModel;
use App\Repository\ModelRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class SubmodelController extends AbstractController
{
    //render sub model view
    #[Route('/admin/submodel/list', name: 'app_submodel')]
    public function index(ModelRepository $modelRepository): Response
    {
        $models=$modelRepository->findAll();
        return $this->render('admin/submodel.html.twig',[
            'models'=>$models
        ]);
    }

    //add sub model
    #[Route('/admin/submodel/list/add', name: 'app_submodel_add')]
    public function addSubModel(Request $request,EntityManagerInterface $entityManager,CsrfTokenManagerInterface $tokenStorage): Response
    {
        $dataJson=json_decode($request->getContent(),true);

        $csrfToken =new CsrfToken('addSubModel',$request->headers->get('X-CSRF-TOKEN'));
        if(!$tokenStorage->isTokenValid($csrfToken)){
            throw $this->createAccessDeniedException();
        }

        $NewSubModel=new SubModel();
        $NewSubModel->setSubmodName($dataJson['submodName']);
        $NewSubModel->setIcon($dataJson['submodIcon']);
            $NewSubModel->setPath($dataJson['submodPath']);
        $NewSubModel->setModelId($entityManager->getRepository(Model::class)->find($dataJson['submodid']));
        try{
            $entityManager->persist($NewSubModel);
            $entityManager->flush();
        }catch (ORMException $exception){
            throw new \Exception( $exception->getMessage());
        }


        return $this->json(['success'=>'added successfully']);
    }
    //remove sub model
    #[Route('/admin/submodel/list/remove', name: 'app_submodel_remove')]
    public function removeModel(Request $request,EntityManagerInterface $entityManager,UrlGeneratorInterface $urlGenerator): Response
    {
        $subModId = $request->query->get('submodId');

        if (!$subModId) {
            flash()->addFlash('error', 'Empty', 'Sub model to be removed not specified');
        }
        $subModelToRemove = $entityManager->getRepository(SubModel::class)->find($subModId);
        if (!$subModelToRemove) {
            flash()->addFlash('error', 'Empty', 'Sub model to be removed not found!!');
        }

        //removing the category
        $entityManager->remove($subModelToRemove);
        $entityManager->flush();
        //success response
        flash()->addFlash('success', 'Removed', 'you successfuly removed the sub model');
        $urlGenerate = $urlGenerator->generate('app_submodel');
        return $this->redirect($urlGenerate);
    }

    //update sub model
    #[Route('/admin/submodel/update', name: 'update_submodel')]
    public function updateSubModel(EntityManagerInterface $entityManager, Request $request,UrlGeneratorInterface $urlGenerator):Response
    {
        //recieving the id and fetching if available
        $SubModelID = $request->query->get('SubModelId');
        $SubModelName = $request->query->get('subModelName');
        $SubmodelIcon = $request->query->get('SubModelIcon');
        $SubModelPath = $request->query->get('subModelPath');


        if (!$SubModelID) {
            flash()->addFlash('error', 'Empty', 'model to be updated not specified');


        }
        $SubModelToUpdate = $entityManager->getRepository(SubModel::class)->find($SubModelID);
        if ($SubModelToUpdate) {
            flash()->addFlash('error', 'Empty', 'Sub model to be updated not found!!');
        }
        $SubModelToUpdate->setSubmodName($SubModelName);
        $SubModelToUpdate->setIcon($SubmodelIcon);
        $SubModelToUpdate->setPath($SubModelPath);
        $entityManager->persist($SubModelToUpdate);
        $entityManager->flush();
        //success response
        flash()->addFlash('success', 'updated', 'you successfuly updated the Sub model');
        $urlGenerate=$urlGenerator->generate('app_submodel');
        return $this->redirect($urlGenerate);
    }

}
