<?php

class App {

    function __construct($f3) {
        $this->f3 = $f3;
        // $f3->set('routes', $routesData);
        // $f3->set('config', new Config($config));
        // $f3->set('user', new User());
        // $f3->set('area', new Area());
        // $f3->set('form', new Form());
        // $f3->set('gallery', new Gallery());
        // $f3->set('lang', $lang);
        // $this->test();
    }

    function test() {
        $user = new User();
        var_dump($user->getSession());
    }

    function start() {
        new Router($this->f3);
        $this->f3->set('path', new Path);
        $this->f3->run();
    }
}