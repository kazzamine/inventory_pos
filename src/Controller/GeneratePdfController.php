<?php

namespace App\Controller;

use App\Entity\Order;
use Dompdf\Options;
use Doctrine\ORM\EntityManagerInterface;
use Dompdf\Dompdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GeneratePdfController extends AbstractController
{
    #generate PDF containing invoice
    #[Route('/user/pdf', name: 'app_generate_pdf')]
    public function index(Request $request,EntityManagerInterface $entityManager): Response
    {
        $orderid=$request->query->get('orderId');
        $order=$entityManager->getRepository(Order::class)->find($orderid);
        $html =  $this->renderView('PDF/invoice.html.twig',  ['order'=>$order]);
        $options=new Options();
        $options->set('isRemoteEnabled',true);
        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->render();
        return new Response (
            $dompdf->stream('Order'.$orderid, ["Attachment" => false]),
            Response::HTTP_OK,
            ['Content-Type' => 'application/pdf']
        );
    }
}
