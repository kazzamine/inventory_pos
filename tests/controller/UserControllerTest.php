<?php
use \Symfony\Component\HttpFoundation\Response;

class UserControllerTest extends \Symfony\Bundle\FrameworkBundle\Test\WebTestCase{
    function testUpdateUser()
    {
        $client=static::createClient();
        $logUser=static::getContainer()->get(\App\Repository\UserRepository::class);
        $admin= $logUser->findOneBy(['username'=>'kazzadmin']);
        $client->loginUser($admin);
        $client->request('GET','/user/profile/update',array(),array(),array(
            'CONTENT_TYPE'=>'application/json'),
            '["id"=>1]'
        );
        $this->assertEquals(Response::HTTP_OK,$client->getResponse()->getStatusCode());
    }
    //test remove user

    function testRemoveUser()
    {
        $client=static::createClient();
        $logUser=static::getContainer()->get(\App\Repository\UserRepository::class);
        $admin= $logUser->findOneBy(['username'=>'kazzadmin']);
        $client->loginUser($admin);
        $client->request('POST','/user/profile/remove',[
            'userId'=>2
        ]);
        $this->assertEquals(Response::HTTP_OK,$client->getResponse()->getStatusCode());
    }
}