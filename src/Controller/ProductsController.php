<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProductsController extends AbstractController
{
    #[Route('/admin/products', name: 'app_products')]
    public function index(): Response
    {
        return $this->render('admin/listProducts.html.twig');
    }
    #[Route('/admin/product/add',name: 'add_product')]
    public function addProductPage():Response{
        return $this->render('admin/addProduct.html.twig');
    }
}
