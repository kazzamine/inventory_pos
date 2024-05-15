<?php

namespace App\Entity;

use App\Repository\ProviderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: ProviderRepository::class)]
#[Broadcast]
class Provider
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $provider_name = null;

    #[ORM\OneToMany(targetEntity: PaymentMethod::class, mappedBy: 'provider_id')]
    private Collection $paymentMethods;

    public function __construct()
    {
        $this->paymentMethods = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProviderName(): ?string
    {
        return $this->provider_name;
    }

    public function setProviderName(string $provider_name): static
    {
        $this->provider_name = $provider_name;

        return $this;
    }

    /**
     * @return Collection<int, PaymentMethod>
     */
    public function getPaymentMethods(): Collection
    {
        return $this->paymentMethods;
    }

    public function addPaymentMethod(PaymentMethod $paymentMethod): static
    {
        if (!$this->paymentMethods->contains($paymentMethod)) {
            $this->paymentMethods->add($paymentMethod);
            $paymentMethod->setProviderId($this);
        }

        return $this;
    }

    public function removePaymentMethod(PaymentMethod $paymentMethod): static
    {
        if ($this->paymentMethods->removeElement($paymentMethod)) {
            // set the owning side to null (unless already changed)
            if ($paymentMethod->getProviderId() === $this) {
                $paymentMethod->setProviderId(null);
            }
        }

        return $this;
    }
}
