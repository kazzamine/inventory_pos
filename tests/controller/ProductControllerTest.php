<?php
use \Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use \Symfony\Component\HttpFoundation\Response;
class ProductControllerTest extends WebTestCase
{
    public function testAddProd()
    {
        $client = static::createClient();
        $userRepository = static::getContainer()->get(\App\Repository\UserRepository::class);

        // retrieve the test user
        $testUser = $userRepository->findOneByUsername('kazzadmin');

        // simulate $testUser being logged in
        $client->loginUser($testUser);
        $client->request('GET','/admin/product/addView');

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

    }
    public function testRemoveProd()
    {
        $client = static::createClient();
        $userRepository = static::getContainer()->get(\App\Repository\UserRepository::class);

        // retrieve the test user
        $testUser = $userRepository->findOneByUsername('kazzadmin');

        // simulate $testUser being logged in
        $client->loginUser($testUser);
        $client->request('POST','/admin/product/remove',[
            'prodId'=>1
        ]);

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

    }
}