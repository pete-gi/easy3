<?php

$f3=require('app/lib/base.php');
$f3->config('config/config.ini');
$routesData = include('config/routing.php');
$config = $f3->get('config');
$lang = new Lang();

foreach($routesData[$lang->current] as $key => $route) {
    $method = 'GET';
    $name = $key;
    $url = $route['url'];
    $callback = 'Page->index';
    $f3->route("$method @$name: $url", "$callback");
}

$f3->set('ONERROR', function($f3) {
    $code = $f3->get('ERROR.code');
    Page::error($code);
});

$f3->set('routes', $routesData);
$f3->set('config', new Config($config));
$f3->set('path', new Path);
$f3->set('user', new User());
$f3->set('form', new Form());
$f3->set('gallery', new Gallery());
$f3->set('lang', $lang);

if ($lang->multilang) {
    Multilang::instance();
}

$f3->run();