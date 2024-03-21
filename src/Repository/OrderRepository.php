<?php

namespace App\Repository;

use App\Entity\Order;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Product;
/**
 * @extends ServiceEntityRepository<Order>
 *
 * @method Order|null find($id, $lockMode = null, $lockVersion = null)
 * @method Order|null findOneBy(array $criteria, array $orderBy = null)
 * @method Order[]    findAll()
 * @method Order[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Order::class);
    }

    public function findBySearchTerm(string $searchTerm)
    {
        $qb = $this->createQueryBuilder('u')
            ->join('u.prod_id','p')
            ->andWhere('u.order_date LIKE :searchTerm OR u.quantity LIKE :searchTerm OR p.prod_name LIKE :searchTerm')
            ->setParameter('searchTerm', '%' . $searchTerm . '%')
            ->getQuery();

        return $qb->getResult();
    }
    public function findByGroup(){
        $sql =
            'SELECT MONTHNAME(o.order_date) as month,  p.prod_name as productName, SUM(o.quantity) as totalSales
            FROM `order` o
            JOIN product p ON o.prod_id_id = p.id
            GROUP BY  month, productName
            '
        ;
        $entityManager = $this->getEntityManager()->getConnection();
        $query = $entityManager->prepare($sql);

        $result= $query->executeQuery();
        return $result->fetchAllAssociative();

    }
    public function findByProd($prodid)
    {
        $sql='
        SELECT o.quantity as quantity , (o.order_date) as orderdate
        FROM `order` o 
        WHERE o.prod_id_id= :prodId
        GROUP BY quantity,orderdate
        ORDER BY orderdate
        ';
        $entityManager = $this->getEntityManager()->getConnection();
        $query = $entityManager->prepare($sql);
        $query->bindValue('prodId',$prodid);
        $result=$query->executeQuery();
        return $result->fetchAllAssociative();

    }

    public function findLastOrders()
    {
        $sql='SELECT o.id as orderid,o.quantity as quantity,p.prod_name as prodname,o.order_date as orderdate from `order` o 
                JOIN product p
                on p.id=o.prod_id_id
                ORDER BY order_date DESC LIMIT 5;';
        $entityManager = $this->getEntityManager()->getConnection();
        $query = $entityManager->prepare($sql);
        $result=$query->executeQuery();
        return $result->fetchAllAssociative();
    }

//    /**
//     * @return Order[] Returns an array of Order objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('o.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Order
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
