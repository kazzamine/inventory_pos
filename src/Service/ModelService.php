<?php
namespace App\Service;
use App\Entity\Model;
use Doctrine\ORM\EntityManager;

class ModelService {
    private $entityManager ;
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager=$entityManager;
    }
    public function getModelItems(): array
    {
        $modelRepo = $this->entityManager->getRepository(Model::class);
        return $modelRepo->findAll();
    }
}