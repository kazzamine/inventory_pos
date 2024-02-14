<?php

namespace App\Entity;

use App\Repository\ModelRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\UX\Turbo\Attribute\Broadcast;

#[ORM\Entity(repositoryClass: ModelRepository::class)]
#[Broadcast]
class Model
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $mod_name = null;

    #[ORM\Column(length: 200)]
    private ?string $icon = null;

    #[ORM\Column(length: 200)]
    private ?string $path = null;

    #[ORM\OneToMany(targetEntity: SubModel::class, mappedBy: 'model_id',cascade: ['remove'])]
    private Collection $subModels;

    #[ORM\Column(length: 100)]
    private ?string $role = null;

    #[ORM\ManyToOne(inversedBy: 'models')]
    private ?Roles $role_id = null;

    public function __construct()
    {
        $this->subModels = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModName(): ?string
    {
        return $this->mod_name;
    }

    public function setModName(string $mod_name): static
    {
        $this->mod_name = $mod_name;

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

    /**
     * @return Collection<int, SubModel>
     */
    public function getSubModels(): Collection
    {
        return $this->subModels;
    }

    public function addSubModel(SubModel $subModel): static
    {
        if (!$this->subModels->contains($subModel)) {
            $this->subModels->add($subModel);
            $subModel->setModelId($this);
        }

        return $this;
    }

    public function removeSubModel(SubModel $subModel): static
    {
        if ($this->subModels->removeElement($subModel)) {
            // set the owning side to null (unless already changed)
            if ($subModel->getModelId() === $this) {
                $subModel->setModelId(null);
            }
        }

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): static
    {
        $this->role = $role;

        return $this;
    }

    public function getRoleId(): ?Roles
    {
        return $this->role_id;
    }

    public function setRoleId(?Roles $role_id): static
    {
        $this->role_id = $role_id;

        return $this;
    }
}
