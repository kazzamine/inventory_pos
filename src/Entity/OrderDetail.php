<?php

namespace App\Entity;

use App\Repository\OrderDetailRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: OrderDetailRepository::class)]
#[Broadcast]
class OrderDetail
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(targetEntity: Order::class, mappedBy: 'orderDetail',cascade: ['remove'])]
    private Collection $order_id;

    #[ORM\ManyToOne(inversedBy: 'orderDetails')]
    #[ORM\JoinColumn(onDelete: 'SET NULL')]
    private ?User $user_id = null;

    #[ORM\Column]
    private ?float $total = null;

    public function __construct()
    {
        $this->order_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, Order>
     */
    public function getOrderId(): Collection
    {
        return $this->order_id;
    }

    public function addOrderId(Order $orderId): static
    {
        if (!$this->order_id->contains($orderId)) {
            $this->order_id->add($orderId);
            $orderId->setOrderDetail($this);
        }

        return $this;
    }

    public function removeOrderId(Order $orderId): static
    {
        if ($this->order_id->removeElement($orderId)) {
            // set the owning side to null (unless already changed)
            if ($orderId->getOrderDetail() === $this) {
                $orderId->setOrderDetail(null);
            }
        }

        return $this;
    }

    public function getUserId(): ?User
    {
        return $this->user_id;
    }

    public function setUserId(?User $user_id): static
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getTotal(): ?float
    {
        return $this->total;
    }

    public function setTotal(float $total): static
    {
        $this->total = $total;

        return $this;
    }
}
