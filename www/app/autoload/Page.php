<?php

class Page {

    function __construct($route = null) {
        $f3 = \Base::instance();
        if ($data !== \Base::instance()) {
            $this->key = $f3->get('ALIAS');
        }
    }

    function index() {
        $lang = new Lang();
        $routes = include('config/routing.php');
        $this->routeData = $routes[$lang->current][$this->key];
        $this->createRouteData();
        $this->render();
    }

    function createRouteData() {
        foreach($this->routeData as $key => $val) {
            $this->$key = $val;
        }
    }

    function render() {
        $path = new Path();
        $f3 = \Base::instance();
        $config = new Config($f3->get('config'));
        $layout = $config->siteLayout;
        $realfilepath = 'view/pages/' . $this->key . '.html';
        $layoutpath = $path->layout($layout);

        if (file_exists($realfilepath)) {
            $f3->set('page', $this);
            echo \Template::instance()->render($layoutpath);
        } else {
            $f3->error(404);
        }
    }

    static function get($page) {
        $f3 = \Base::instance();
        $routes = include('config/routing.php');
        $lang = new Lang();
        $pageData = $routes[$lang->current][$page];
        return $pageData;
    }

}