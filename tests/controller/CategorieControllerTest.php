<?php

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\User;
class   CategorieControllerTest extends WebTestCase
{
    public function testAddCat()
    {
        $client = static::createClient();
        $userRepository = static::getContainer()->get(\App\Repository\UserRepository::class);

        // retrieve the test user
        $testUser = $userRepository->findOneByUsername('kazzadmin');

        // simulate $testUser being logged in
        $client->loginUser($testUser);
        $content="{'catname':'testedCat2','desc':'catDesc2'}";
        $client->request('POST','/admin/category/add',[],[],['HTTP_CONTENT_TYPE' => 'application/json','HTTP_X-CSRF-TOKEN'=>'addCat'], json_decode($content));
        $response=$client->getResponse();

        //$this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());
        $this->assertEquals("{'success':'added'}", $response->getContent());
    }
    public function testRemoveCat()
    {
        $client = static::createClient();
        $userRepository = static::getContainer()->get(\App\Repository\UserRepository::class);

        // retrieve the test user
        $testUser = $userRepository->findOneByUsername('kazzadmin');

        // simulate $testUser being logged in
        $client->loginUser($testUser);
        $client->request('GET','/admin/categories/remove',[
            'catId'=>3
        ]);

        $this->assertEquals(Response::HTTP_OK, $client->getResponse()->getStatusCode());

    }
}