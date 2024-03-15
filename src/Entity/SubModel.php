<?php

namespace App\Entity;

use App\Repository\SubModelRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: SubModelRepository::class)]
#[Broadcast]
class SubModel
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 200)]
    private ?string $submod_name = null;

    #[ORM\Column(length: 200)]
    private ?string $icon = null;

    #[ORM\Column(length: 200)]
    private ?string $path = null;

    #[ORM\ManyToOne(inversedBy: 'subModels')]
    private ?Model $model_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubmodName(): ?string
    {
        return $this->submod_name;
    }

    public function setSubmodName(string $submod_name): static
    {
        $this->submod_name = $submod_name;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): static
    {
        $this->path = $path;

        return $this;
    }

    public function getModelId(): ?Model
    {
        return $this->model_id;
    }

    public function setModelId(?Model $model_id): static
    {
        $this->model_id = $model_id;

        return $this;
    }
}
