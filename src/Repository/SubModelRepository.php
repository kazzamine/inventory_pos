<?php

namespace App\Repository;

use App\Entity\SubModel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SubModel>
 *
 * @method SubModel|null find($id, $lockMode = null, $lockVersion = null)
 * @method SubModel|null findOneBy(array $criteria, array $orderBy = null)
 * @method SubModel[]    findAll()
 * @method SubModel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SubModelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SubModel::class);
    }

//    /**
//     * @return SubModel[] Returns an array of SubModel objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?SubModel
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
