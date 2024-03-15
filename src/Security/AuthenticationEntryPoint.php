<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\EntryPoint\AuthenticationEntryPointInterface;

class AuthenticationEntryPoint implements AuthenticationEntryPointInterface
{
    public function __construct(private UrlGeneratorInterface $generateurl)
    {

    }
    public function start(Request $request, ?AuthenticationException $authException = null): Response
    {
        $url=$this->generateurl->generate('app_login');
        return new RedirectResponse($url);
    }
}