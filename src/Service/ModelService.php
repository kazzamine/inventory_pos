<?php
namespace App\Service;
use App\Entity\Model;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class ModelService {
    private $entityManager ;
    private $tokenStorage;
    public function __construct(EntityManager $entityManager,TokenStorageInterface $tokenStorage)
    {
        $this->entityManager=$entityManager;
        $this->tokenStorage=$tokenStorage;
    }
    public function getModelItems()
    {
        $modelRepo = $this->entityManager->getRepository(Model::class);
        $token=$this->tokenStorage->getToken();
        $result=null;
        if(null !=$token){
            $user = $token->getUser();
            if ($user instanceof UserInterface) {
                // Get the roles of the user
                $roles = $user->getRoles();

                if (in_array('ROLE_ADMIN', $roles, true)) {
                    $result= $modelRepo->findAll();
                }else if(in_array('ROLE_USER', $roles, true)){
                    $result= $modelRepo->findBy(['role'=>'ROLE_USER']);
                }
            }
        }
        return $result;
    }
}