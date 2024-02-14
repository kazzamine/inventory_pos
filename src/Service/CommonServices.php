<?php
namespace App\Service;
use App\Entity\Order;
use App\Entity\OrderDetail;
use App\Entity\Payement;
use App\Entity\PaymentMethod;
use App\Entity\Provider;
use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

class CommonServices
{
    //add to payement method
    public function addToPaymentMethod(EntityManagerInterface $entityManager,$accnumber,$expdate,$user,$provider):int
    {
        $addPayment=new PaymentMethod();
        $addPayment->setAccNumber($accnumber);
        $addPayment->setExpireDate($expdate);
        $addPayment->setUserId($user);
        $providerId=$entityManager->getRepository(Provider::class)->findOneBy(['provider_name'=>$provider]);
        $addPayment->setProviderId($providerId);
        $entityManager->persist($addPayment);
        $entityManager->flush();
        return $addPayment->getId();
    }

    //add payment
    public function addPayment(EntityManagerInterface $entityManager,$payment,$amount,$rest)
    {
        $addPayment=new Payement();
        $addPayment->setAmount((float)$amount);
        $addPayment->setRest((float)$rest);
        $providerId=$entityManager->getRepository(Provider::class)->findOneBy(['provider_name'=>$payment]);
        $addPayment->setPaymentProvider($providerId);
        $entityManager->persist($addPayment);
        $entityManager->flush();
        return $addPayment;

    }
    //add order details
    public function addDetail(EntityManagerInterface $entityManager,$user,$total)
    {
        $orderDet=new OrderDetail();
        $orderDet->setUserId($user);
        $orderDet->setTotal($total);
        $entityManager->persist($orderDet);
        $entityManager->flush();
        return $orderDet;

    }
    //add Order
    public function addOrder(EntityManagerInterface $entityManager,$prodId,$orderDetail,$payment,$quantity,$discount):void
    {
        $order=new Order();
        $order->setOrderDetail($orderDetail);
        $order->setDiscount($discount);
        $order->setQuantity($quantity);
        $order->setProdId($prodId);
        $order->setPaymentId($payment);
        $order->setOrderDate(new \DateTime('now'));
        $entityManager->persist($order);
        $entityManager->flush();
    }
}