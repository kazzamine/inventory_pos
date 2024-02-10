<?php

namespace App\Entity;

use App\Repository\OrderRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: OrderRepository::class)]
#[ORM\Table(name: '`order`')]
#[Broadcast]
class Order
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'orders')]
    private ?Product $prod_id = null;

    #[ORM\Column]
    private ?int $quantity = null;

    #[ORM\Column(nullable: true)]
    private ?float $discount = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $order_date = null;

    #[ORM\ManyToOne(inversedBy: 'order_id')]
    private ?OrderDetail $orderDetail = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?Payement $payment_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProdId(): ?Product
    {
        return $this->prod_id;
    }

    public function setProdId(?Product $prod_id): static
    {
        $this->prod_id = $prod_id;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getDiscount(): ?float
    {
        return $this->discount;
    }

    public function setDiscount(?float $discount): static
    {
        $this->discount = $discount;

        return $this;
    }

    public function getOrderDate(): ?\DateTimeInterface
    {
        return $this->order_date;
    }

    public function setOrderDate(\DateTimeInterface $order_date): static
    {
        $this->order_date = $order_date;

        return $this;
    }

    public function getOrderDetail(): ?OrderDetail
    {
        return $this->orderDetail;
    }

    public function setOrderDetail(?OrderDetail $orderDetail): static
    {
        $this->orderDetail = $orderDetail;

        return $this;
    }

    public function getPaymentId(): ?Payement
    {
        return $this->payment_id;
    }

    public function setPaymentId(?Payement $payment_id): static
    {
        $this->payment_id = $payment_id;

        return $this;
    }
}
