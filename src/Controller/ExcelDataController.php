<?php

namespace App\Controller;

use App\Entity\Order;
use App\Entity\Product;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Attribute\Route;

class ExcelDataController extends AbstractController
{
    # orders in Excel
    #[Route('/admin/excel/orders', name: 'app_excel_orders')]
    public function ordersSpreadsheet(EntityManagerInterface $entityManager):StreamedResponse
    {
        $spreadsheet=new Spreadsheet();
        $currentWorkSheet=$spreadsheet->getActiveSheet();
        # style cells
        $styleArray = [
            'font' => [
                'bold' => true,
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
            'fill' => [
                'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_GRADIENT_LINEAR,
                'rotation' => 90,
                'startColor' => [
                    'argb' => '#FFA0A0A0',
                ],
                'endColor' => [
                    'argb' => '#FFFFFFFF',
                ],
            ],
        ];
        $currentWorkSheet->getStyle('A1:H1')->applyFromArray($styleArray);
        # setting table headers
        $currentWorkSheet->setCellValue('A1','Order ID');
        $currentWorkSheet->setCellValue('B1','User');
        $currentWorkSheet->setCellValue('C1','Product');
        $currentWorkSheet->setCellValue('D1','Quantity');
        $currentWorkSheet->setCellValue('E1','Total');
        $currentWorkSheet->setCellValue('F1','Date');
        # getting data
        $ordersData=$entityManager->getRepository(Order::class)->findAll();
        #displaying data on worksheet
        $index=2;
        foreach($ordersData as $orderData){
            $currentWorkSheet->setCellValue('A'.$index,$orderData->getId());
            $currentWorkSheet->setCellValue('B'.$index,$orderData->getOrderDetail()->getUserId()->getUsername());
            $currentWorkSheet->setCellValue('C'.$index,$orderData->getProdId()->getProdName());
            $currentWorkSheet->setCellValue('D'.$index,$orderData->getQuantity());
            $currentWorkSheet->setCellValue('E'.$index,$orderData->getOrderDetail()->getTotal());
            $currentWorkSheet->setCellValue('F'.$index,$orderData->getOrderDate());
            $index++;
        }
        # Total amount gained from sales
        $cellsRange='E2:E'.$index-1;
        $currentWorkSheet->setCellValue('D'.$index,'Total');
        $currentWorkSheet->setCellValue('E'.$index,'=SUM('.$cellsRange.')');
        # resizing columns based on text
        $currentWorkSheet->getColumnDimension('A')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('B')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('C')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('D')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('E')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('F')->setAutoSize(true);
        #save file
        $saveFile = new Xlsx($spreadsheet);
        $response =  new StreamedResponse(
            function () use ($saveFile) {
                $saveFile->save('php://output');
            }
        );
        # date of the day when Excel is generated
        $date = date('m/d/Y h:i:s a', time());
        $response->headers->set('Content-Type','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        $response->headers->set('Content-Disposition', 'attachment;filename="orders'.$date.'.xlsx"');
        $response->headers->set('Cache-Control','max-age=0');
        return $response;
    }

    # users in an Excel file
    #[Route('/admin/excel/users', name: 'app_excel_users')]
    public function usersSpreadsheet(EntityManagerInterface $entityManager):StreamedResponse
    {
        $UsersSpreadsheet=new Spreadsheet();
        $currentWorkSheet=$UsersSpreadsheet->getActiveSheet();
        # style cells
        $styleArray = [
            'font' => [
                'bold' => true,
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
            'fill' => [
                'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_GRADIENT_LINEAR,
                'startColor' => [
                    'argb' => '#FFA0A0A0',
                ],
                'endColor' => [
                    'argb' => '#FFFFFFFF',
                ],
            ],
        ];
        $currentWorkSheet->getStyle('A1:H1')->applyFromArray($styleArray);
        # setting table headers
        $currentWorkSheet->setCellValue('A1','user ID');
        $currentWorkSheet->setCellValue('B1','Username');
        $currentWorkSheet->setCellValue('C1','first name');
        $currentWorkSheet->setCellValue('D1','last name');
        $currentWorkSheet->setCellValue('E1','address');
        $currentWorkSheet->setCellValue('F1','city');
        $currentWorkSheet->setCellValue('G1','phone');
        $currentWorkSheet->setCellValue('H1','email');

        # getting data
        $usersData=$entityManager->getRepository(User::class)->findAll();
        #displaying data on worksheet
        $index=2;
        foreach($usersData as $userData){
            $currentWorkSheet->setCellValue('A'.$index,$userData->getId());
            $currentWorkSheet->setCellValue('B'.$index,$userData->getUsername());
            $currentWorkSheet->setCellValue('C'.$index,$userData->getFirstName());
            $currentWorkSheet->setCellValue('D'.$index,$userData->getLastName());
            $currentWorkSheet->setCellValue('E'.$index,$userData->getAdress());
            $currentWorkSheet->setCellValue('F'.$index,$userData->getCity());
            $currentWorkSheet->setCellValue('G'.$index,$userData->getPhone());
            $currentWorkSheet->setCellValue('H'.$index,$userData->getEmail());
            $index++;
        }
        # resizing columns based on text
        $currentWorkSheet->getColumnDimension('A')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('B')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('C')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('D')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('E')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('F')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('G')->setAutoSize(true);
        $currentWorkSheet->getColumnDimension('H')->setAutoSize(true);

        #save file
        $saveFile = new Xlsx($UsersSpreadsheet);
        $response =  new StreamedResponse(
            function () use ($saveFile) {
                $saveFile->save('php://output');
            }
        );
        # date of the day when Excel is generated
        $date = date('m/d/Y h:i:s a', time());
        $response->headers->set('Content-Type','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        $response->headers->set('Content-Disposition', 'attachment;filename="users-'.$date.'.xlsx"');
        $response->headers->set('Cache-Control','max-age=0');
        return $response;
    }

    # Products spreadsheet (excel)
    #[Route('/admin/excel/products',name: 'app_excel_products')]
    public function productsSpreadsheet(EntityManagerInterface $entityManager):StreamedResponse
    {
        $productsSpredsheet=new Spreadsheet();
        $activeSheet=$productsSpredsheet->getActiveSheet();
        #spreadsheet style
        $styleArray = [
            'font' => [
                'bold' => true,
            ],
            'alignment' => [
                'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
            ],
            'fill' => [
                'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_GRADIENT_LINEAR,
                'startColor' => [
                    'argb' => '#FFA0A0A0',
                ],
                'endColor' => [
                    'argb' => '#FFFFFFFF',
                ],
            ],
        ];
        $activeSheet->getStyle('A1:H1')->applyFromArray($styleArray);
        # selecting data
        $products=$entityManager->getRepository(Product::class)->findAll();
        # column names
        $activeSheet->setCellValue('A1','ID');
        $activeSheet->setCellValue('B1','Product name');
        $activeSheet->setCellValue('C1','Description');
        $activeSheet->setCellValue('D1','Category');
        $activeSheet->setCellValue('E1','Quantity');
        $activeSheet->setCellValue('F1','Price');
        $activeSheet->setCellValue('G1','Tax');
        $activeSheet->setCellValue('H1','Created At');
        #looping through data
        $index=2;
        foreach ($products as $product){
            $activeSheet->setCellValue('A'.$index,$product->getId());
            $activeSheet->setCellValue('B'.$index,$product->getProdName());
            $activeSheet->setCellValue('C'.$index,$product->getProdDesc());
            $activeSheet->setCellValue('D'.$index,$product->getCatId()->getCatName());
            $activeSheet->setCellValue('E'.$index,$product->getStorage()->getStorageQuantity());
            $activeSheet->setCellValue('F'.$index,$product->getPrice());
            $activeSheet->setCellValue('G'.$index,$product->getTax());
            $activeSheet->setCellValue('H'.$index,$product->getCreatedAt());
            $index++;
        }
        # resizing columns based on text
        $activeSheet->getColumnDimension('A')->setAutoSize(true);
        $activeSheet->getColumnDimension('B')->setAutoSize(true);
        $activeSheet->getColumnDimension('C')->setAutoSize(true);
        $activeSheet->getColumnDimension('D')->setAutoSize(true);
        $activeSheet->getColumnDimension('E')->setAutoSize(true);
        $activeSheet->getColumnDimension('F')->setAutoSize(true);
        $activeSheet->getColumnDimension('G')->setAutoSize(true);
        $activeSheet->getColumnDimension('H')->setAutoSize(true);

        #save file
        $saveFile=new Xlsx($productsSpredsheet);
        $response=new StreamedResponse(
            function ()use($saveFile){
                $saveFile->save('php://output');
            }
        );
        # date of the export
        $date = date('m/d/Y h:i:s',time());
        $response->headers->set('Content-Type','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        $response->headers->set('Content-Disposition', 'attachment;filename="products-'.$date.'.xlsx"');
        $response->headers->set('Cache-Control','max-age=0');
        return $response;
    }
}
