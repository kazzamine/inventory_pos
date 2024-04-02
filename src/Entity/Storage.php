<?php

namespace App\Entity;

use App\Repository\StorageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: StorageRepository::class)]
#[Broadcast]
class Storage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $storage_quantity = null;

    #[ORM\OneToOne(inversedBy: 'storage', cascade: ['persist'])]
    #[ORM\JoinColumn(onDelete: 'SET NULL')]
    private ?Product $prod_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStorageQuantity(): ?int
    {
        return $this->storage_quantity;
    }

    public function setStorageQuantity(?int $storage_quantity): static
    {
        $this->storage_quantity = $storage_quantity;

        return $this;
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
}
