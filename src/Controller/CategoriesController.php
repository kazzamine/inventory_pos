<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CategoriesController extends AbstractController
{
    #[Route('/admin/categories', name: 'app_categories')]
    public function index(): Response
    {
        return $this->render('admin/listCategories.html.twig');
    }
    #[Route('/admin/category/add', name: 'add_category')]
    public function addCatView(): Response
    {
        return $this->render('admin/addCategory.html.twig');
    }
}
