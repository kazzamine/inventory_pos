<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CategoriesController extends AbstractController
{
    #retrieving all available categories in database and rendering them with the view
    #[Route('admin/categories', name: 'app_categories')]
    public function index(CategoryRepository $categoryRepository, PaginatorInterface $paginator,Request $request): Response
    {
        $allCategories=$categoryRepository->findAll();
        $currentPage= !$request->get('page')?1:$request->get('page');
        $paginat=$paginator->paginate($allCategories,$currentPage,10,[
            'defaultSortFieldName'      => 'category.catName',
            'defaultSortDirection' => 'desc'
        ]);
        return $this->render('admin/listCategories.html.twig',
        ['categories'=>$paginat]);
    }

    #[Route('/admin/category/add', name: 'add_category')]
    public function addCatView(): Response
    {
        return $this->render('admin/addCategory.html.twig');
    }
}
