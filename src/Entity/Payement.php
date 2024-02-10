<?php

namespace App\Entity;

use App\Repository\PayementRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: PayementRepository::class)]
#[Broadcast]
class Payement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?float $amount = null;

    #[ORM\Column(nullable: true)]
    private ?float $rest = null;

    #[ORM\ManyToOne]
    private ?Provider $payment_provider = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(?float $amount): static
    {
        $this->amount = $amount;

        return $this;
    }

    public function getRest(): ?float
    {
        return $this->rest;
    }

    public function setRest(?float $rest): static
    {
        $this->rest = $rest;

        return $this;
    }

    public function getPaymentProvider(): ?Provider
    {
        return $this->payment_provider;
    }

    public function setPaymentProvider(?Provider $payment_provider): static
    {
        $this->payment_provider = $payment_provider;

        return $this;
    }
}
