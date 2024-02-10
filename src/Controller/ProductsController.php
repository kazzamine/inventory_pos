<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProductsController extends AbstractController
{
    #[Route('/admin/products', name: 'app_products')]
    public function index(ProductRepository $productRepository,PaginatorInterface $paginator,Request $request): Response
    {
        $currentpage=(!$request->get('page')?1:$request->get('page'));
        $allProduct=$productRepository->findAll();
        $paginationResult=$paginator->paginate($allProduct,$currentpage,10);
        return $this->render('admin/listProducts.html.twig',
        ['products'=>$paginationResult]);
    }
    #[Route('/product/add',name: 'add_product')]
    public function addProductPage():Response{
        return $this->render('admin/addProduct.html.twig');
    }
}
