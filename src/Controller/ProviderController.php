<?php

namespace App\Controller;

use App\Entity\Provider;
use App\Form\AddProviderForm;
use App\Repository\ProviderRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProviderController extends AbstractController
{
    #[Route('/admin/provider', name: 'app_provider_list')]
    public function index(ProviderRepository $providerRepository,Request $request,EntityManagerInterface $entityManager): Response
    {
        $provider=new Provider();
        $form=$this->createForm(AddProviderForm::class,$provider);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($provider);
            $entityManager->flush();
        }

        $providers=$providerRepository->findAll();
        return $this->render('admin/providers.html.twig',
        ['providers'=>$providers,
            'form'=>$form]);
    }

    //remove provider
    #[Route('/admin/provider/update',name: 'app_provider_update')]
    public function removeProvider(Request $request,EntityManagerInterface $entityManager):JsonResponse
    {
        $data=json_decode($request->getContent(),true);
        if(!$data){
            return $this->json(['error'=>'not specified']);
        }
        $provider=$entityManager->getRepository(Provider::class)->find($data['providerId']);
        if(!$provider)
        {
            return $this->json(['error'=>'not found']);
        }
        $provider->setProviderName($data['providerName']);
        $entityManager->persist($provider);
        $entityManager->flush();
        return $this->json(['success'=>'updated successfully!!']);
    }
}
