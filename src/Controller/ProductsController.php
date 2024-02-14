<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Repository\CategoryRepository;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class ProductsController extends AbstractController
{
    #listing products in admin view
    #[Route('/admin/products', name: 'app_products')]
    public function index(ProductRepository $productRepository,PaginatorInterface $paginator,Request $request): Response
    {
        $allProduct=$productRepository->findAll();
        //search

//        $searchTerm = $request->query->get('search', '');
//        $allCategories = $categoryRepository->findBySearchTerm($searchTerm);
        //sorting
        $sortBy = $request->query->get('sort_by', 'prod_name');
        $sortOrder = $request->query->get('sort_order', 'asc');
        $currentPage = !$request->get('page') ? 1 : $request->get('page');
        $allProduct = $productRepository->findBy([], [$sortBy => $sortOrder]);
        //paginating
        $paginat = $paginator->paginate($allProduct, $currentPage, 10);

        return $this->render('admin/listProducts.html.twig',
        ['products'=>$paginat,
            'sort_by' => $sortBy,
            'sort_order' => $sortOrder]);
    }
    //render add product view
    #[Route('/admin/product/addView',name: 'add_product_view')]
    public function addProductPage(CategoryRepository $categoryRepository):Response{
        $categories=$categoryRepository->findAll();
        return $this->render('admin/addProduct.html.twig',['categories'=>$categories]);
    }
    //handle ajax request to add product
    #[Route('/admin/product/add', name: 'add_product')]
    public function addCat(EntityManagerInterface $entityManager, Request $request, CsrfTokenManagerInterface $csrfTokenManager): Response
    {

        $data = json_decode($request->getContent(), true);
        //checking if csrftoken is valid
        $token = new CsrfToken('addProd', $request->headers->get('X-CSRF-TOKEN'));
        if (!$csrfTokenManager->isTokenValid($token)) {
            throw $this->createAccessDeniedException('invalid csrf token');
        }
        if (!$data) {
            return $this->json(['error' => 'empty'], 400);
        }
        //retrieving sent data from ajax
        $prodName = $data['prodName'];
        $prodDesc = $data['desc'];
        $prodPrice = $data['price'];
        $prodTax = $data['tax'];
        //associated category
        $prodCat = $data['category'];
        $category=$entityManager->getRepository(Category::class)->find($prodCat);
        $addBy = $this->getUser();
        //adding
        $newProd = new Product();
        $newProd->setProdName($prodName);
        $newProd->setProdDesc($prodDesc);
        $newProd->setTax($prodTax);
        $newProd->setPrice($prodPrice);
        $newProd->setCatId($category);
        $newProd->setUserId($addBy);
        $entityManager->persist($newProd);
        $entityManager->flush();
        //success response
        return $this->json(['success' => 'added']);
    }

    //remove product
    #[Route('/admin/product/remove', name: 'remove_product')]
    public function removeCat(EntityManagerInterface $entityManager, Request $request,UrlGeneratorInterface $urlGenerator):Response
    {
        //recieving the id and fetching if available product
        $prodId = $request->query->get('prodId');
        if (!$prodId) {
            flash()->addFlash('error', 'Empty', 'Product to be removed not specified');


        }
        $productToRemove = $entityManager->getRepository(Product::class)->find($prodId);
        if (!$productToRemove) {
            flash()->addFlash('error', 'Empty', 'product to be removed not found!!');
        }

        //removing the category
        $entityManager->remove($productToRemove);
        $entityManager->flush();
        //success response
        flash()->addFlash('success', 'Removed', 'you successfuly removed the category');
        $urlGenerate=$urlGenerator->generate('app_products');
        return $this->redirect($urlGenerate);
    }

}
