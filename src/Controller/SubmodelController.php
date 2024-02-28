<?php

namespace App\Controller;

use App\Entity\Model;
use App\Entity\SubModel;
use App\Repository\ModelRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class SubmodelController extends AbstractController
{
    # render sub model view
    #[Route('/admin/submodel/list', name: 'app_submodel')]
    public function index(ModelRepository $modelRepository): Response
    {
        $models=$modelRepository->findAll();
        return $this->render('admin/submodel.html.twig',[
            'models'=>$models
        ]);
    }

    # add sub model
    #[Route('/admin/submodel/list/add', name: 'app_submodel_add')]
    public function addSubModel(Request $request,EntityManagerInterface $entityManager,CsrfTokenManagerInterface $tokenStorage): Response
    {
        # decoding data from ajax
        $dataJson=json_decode($request->getContent(),true);
        # checking if csrf token is valid
        $csrfToken =new CsrfToken('addSubModel',$request->headers->get('X-CSRF-TOKEN'));
        if(!$tokenStorage->isTokenValid($csrfToken)){
            throw $this->createAccessDeniedException();
        }
        # inserting new sub model data
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
    # remove sub model
    #[Route('/admin/submodel/list/remove', name: 'app_submodel_remove')]
    public function removeModel(Request $request,EntityManagerInterface $entityManager,UrlGeneratorInterface $urlGenerator): Response
    {
        # getting sub model id
        $subModId = $request->query->get('submodId');
        # checking if sub model is selected and exists
        if (!$subModId) {
            flash()->addFlash('error', 'Empty', 'Sub model to be removed not specified');
        }
        $subModelToRemove = $entityManager->getRepository(SubModel::class)->find($subModId);
        if (!$subModelToRemove) {
            flash()->addFlash('error', 'Empty', 'Sub model to be removed not found!!');
        }

        # removing the sub model
        $entityManager->remove($subModelToRemove);
        $entityManager->flush();
        # success response
        flash()->addFlash('success', 'Removed', 'you successfuly removed the sub model');
        $urlGenerate = $urlGenerator->generate('app_submodel');
        return $this->redirect($urlGenerate);
    }

    # update sub model
    #[Route('/admin/submodel/update', name: 'update_submodel')]
    public function updateSubModel(EntityManagerInterface $entityManager, Request $request,UrlGeneratorInterface $urlGenerator):Response
    {
        # getting the id of selected sub model
        $SubModelID = $request->query->get('SubModelId');
        #getting new inserted data
        $SubModelName = $request->query->get('subModelName');
        $SubmodelIcon = $request->query->get('SubModelIcon');
        $SubModelPath = $request->query->get('subModelPath');
        # check if sub model is selected and exists
        if (!$SubModelID) {
            flash()->addFlash('error', 'Empty', 'model to be updated not specified');
        }
        $SubModelToUpdate = $entityManager->getRepository(SubModel::class)->find($SubModelID);
        if (!$SubModelToUpdate) {
            flash()->addFlash('error', 'Empty', 'Sub model to be updated not found!!');
        }
        # updating with new values
        $SubModelToUpdate->setSubmodName($SubModelName);
        $SubModelToUpdate->setIcon($SubmodelIcon);
        $SubModelToUpdate->setPath($SubModelPath);
        $entityManager->persist($SubModelToUpdate);
        $entityManager->flush();
        # success response
        flash()->addFlash('success', 'updated', 'you successfuly updated the Sub model');
        $urlGenerate=$urlGenerator->generate('app_submodel');
        return $this->redirect($urlGenerate);
    }

}
