<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    /**
     * @Route("/test", name="test")
     */
    public function index()
    {
        return $this->render('test/index.html.twig');
    }

    /**
     * @Route("/test/landscape", name="landscape")
     */
    public function landscape()
    {
        return $this->render('test/village.html.twig');
    }
}
