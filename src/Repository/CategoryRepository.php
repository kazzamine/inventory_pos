<?php

namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Category>
 *
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Category::class);
    }

    # find category by searched element
    public function findBySearchTerm(string $searchTerm)
    {
        $qb = $this->createQueryBuilder('u')
            ->andWhere('u.cat_name LIKE :searchTerm OR u.created_at LIKE :searchTerm')
            ->setParameter('searchTerm', '%' . $searchTerm . '%')
            ->getQuery();

        return $qb->getResult();
    }

    public function findLastCategories()
    {
        $sql='SELECT c.id as catid,c.cat_name as catName,u.username as username,c.created_at as createdat 
                from category c 
                    JOIN user u on u.id=c.user_id_id 
                    ORDER BY created_at DESC LIMIT 3;';
        $entityManager = $this->getEntityManager()->getConnection();
        $query = $entityManager->prepare($sql);
        $result=$query->executeQuery();
        return $result->fetchAllAssociative();
    }
//    /**
//     * @return Category[] Returns an array of Category objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Category
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }


}
