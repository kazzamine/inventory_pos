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


    public function getDatatableData($start, $length, $searchValue, $orderColumn, $orderDirection)
    {
        // Define the query builder for your entity
        $qb = $this->createQueryBuilder('e')
            ->setFirstResult($start)
            ->setMaxResults($length);

        // Apply search filter if provided
        if (!empty($searchValue)) {
            $qb->andWhere('e.cat_name LIKE :search')
                ->setParameter('search', '%' . $searchValue . '%');
        }

        // Apply order
        $orderBy = 'e.' . $this->getFieldNameForOrder($orderColumn);
        $qb->orderBy($orderBy, $orderDirection);

        return $qb->getQuery()->getResult();
    }

    public function getTotalRecords()
    {
        return $this->createQueryBuilder('e')
            ->select('COUNT(e.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function getFilteredRecords($searchValue)
    {
        $qb = $this->createQueryBuilder('e')
            ->select('COUNT(e.id)');

        if (!empty($searchValue)) {
            $qb->andWhere('e.name LIKE :search')
                ->setParameter('search', '%' . $searchValue . '%');
            // Add additional conditions for other fields as needed
        }

        return $qb->getQuery()->getSingleScalarResult();
    }

    private function getFieldNameForOrder($orderColumn)
    {
        // Map DataTables column index to your entity field
        $columnMap = [
            0 => 'id',
            1 => 'cat_name',
            // Add more mappings for other columns
        ];

        return $columnMap[$orderColumn] ?? 'id';
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
