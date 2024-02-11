<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class CategoriesController extends AbstractController
{
    #retrieving all available categories in database and rendering them with the admin view
    #[Route('/admin/categories', name: 'app_categories')]
    public function adminCat(CategoryRepository $categoryRepository, PaginatorInterface $paginator, Request $request): Response
    {
        $allCategories = $categoryRepository->findAll();
        $currentPage = !$request->get('page') ? 1 : $request->get('page');
        $paginat = $paginator->paginate($allCategories, $currentPage, 10, [
            'defaultSortFieldName' => 'category.catName',
            'defaultSortDirection' => 'desc'
        ]);
        return $this->render('admin/listCategories.html.twig',
            ['categories' => $paginat]);
    }

    //render adding category view
    #[Route('/admin/category/addView', name: 'add_category_view')]
    public function addCatView(CategoryRepository $categoryRepository): Response
    {
        $allCategories = $categoryRepository->findAll();
        return $this->render('admin/addCategory.html.twig');
    }

    //adding new category from ajax call
    #[Route('/admin/category/add', name: 'add_category')]
    public function addCat(EntityManagerInterface $entityManager, Request $request, CsrfTokenManagerInterface $csrfTokenManager): Response
    {

        $data = json_decode($request->getContent(), true);
        //checking if csrftoken is valid
        $token = new CsrfToken('addCat', $request->headers->get('X-CSRF-TOKEN'));
        if (!$csrfTokenManager->isTokenValid($token)) {
            throw $this->createAccessDeniedException('invalid csrf token');
        }
        if (!$data) {
            return $this->json(['error' => 'empty'], 400);
        }
        //retrieving sent data from ajax
        $catName = $data['catname'];
        $desc = $data['desc'];
        $addby = $this->getUser();
        //adding
        $newCat = new Category();
        $newCat->setCatName($catName);
        $newCat->setCatDesc($desc);
        $newCat->setUserId($addby);
        $entityManager->persist($newCat);
        $entityManager->flush();
        //success response
        return $this->json(['success' => 'added']);
    }

    //remove category
    #[Route('/admin/categories/remove', name: 'remove_category')]
    public function removeCat(EntityManagerInterface $entityManager, Request $request,UrlGeneratorInterface $urlGenerator):Response
    {
        //recieving the id and fetching if available
        $catId = $request->query->get('catId');
        if (!$catId) {
            flash()->addFlash('error', 'Empty', 'category to be removed not specified');


        }
        $categoryToRemove = $entityManager->getRepository(Category::class)->find($catId);
        if (!$categoryToRemove) {
            flash()->addFlash('error', 'Empty', 'category to be removed not found!!');
        }

        //removing the category
        $entityManager->remove($categoryToRemove);
        $entityManager->flush();
        //success response
        flash()->addFlash('success', 'Removed', 'you successfuly removed the category');
        $urlGenerate=$urlGenerator->generate('app_categories');
        return $this->redirect($urlGenerate);
    }

    //update category
    #[Route('/admin/categories/update', name: 'update_category')]
    public function updateCat(EntityManagerInterface $entityManager, Request $request,UrlGeneratorInterface $urlGenerator):Response
    {
        //recieving the id and fetching if available
        $catId = $request->query->get('catId');
        if (!$catId) {
            flash()->addFlash('error', 'Empty', 'category to be removed not specified');


        }
        $categoryToRemove = $entityManager->getRepository(Category::class)->find($catId);
        if (!$categoryToRemove) {
            flash()->addFlash('error', 'Empty', 'category to be updated not found!!');
        }

        //removing the category
        $entityManager->remove($categoryToRemove);
        $entityManager->flush();
        //success response
        flash()->addFlash('success', 'updated', 'you successfuly updated the category');
        $urlGenerate=$urlGenerator->generate('app_categories');
        return $this->redirect($urlGenerate);
    }
}
