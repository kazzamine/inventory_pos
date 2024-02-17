<?php

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\User;
class CategorieControllerTest extends WebTestCase
{
    public function testAddCat()
    {
        $client = static::createClient();
        $userRepository = static::getContainer()->get(\App\Repository\UserRepository::class);

        // retrieve the test user
        $testUser = $userRepository->findOneByUsername('kazzadmin');

        // simulate $testUser being logged in
        $client->loginUser($testUser);
        $client->request('GET','/admin/category/addView');

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

    }
    public function testRemoveCat()
    {
        $client = static::createClient();
        $userRepository = static::getContainer()->get(\App\Repository\UserRepository::class);

        // retrieve the test user
        $testUser = $userRepository->findOneByUsername('kazzadmin');

        // simulate $testUser being logged in
        $client->loginUser($testUser);
        $client->request('POST','/admin/categories/remove',[
            'catId'=>2
        ]);

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

    }
}