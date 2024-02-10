<?php

namespace App\Entity;

use App\Repository\PaymentMethodRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: PaymentMethodRepository::class)]
#[Broadcast]
class PaymentMethod
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'paymentMethods')]
    private ?Provider $provider_id = null;

    #[ORM\Column]
    private ?int $acc_number = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $expire_date = null;

    #[ORM\ManyToOne(inversedBy: 'paymentMethods')]
    private ?User $user_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProviderId(): ?Provider
    {
        return $this->provider_id;
    }

    public function setProviderId(?Provider $provider_id): static
    {
        $this->provider_id = $provider_id;

        return $this;
    }

    public function getAccNumber(): ?int
    {
        return $this->acc_number;
    }

    public function setAccNumber(int $acc_number): static
    {
        $this->acc_number = $acc_number;

        return $this;
    }

    public function getExpireDate(): ?\DateTimeInterface
    {
        return $this->expire_date;
    }

    public function setExpireDate(?\DateTimeInterface $expire_date): static
    {
        $this->expire_date = $expire_date;

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
}
