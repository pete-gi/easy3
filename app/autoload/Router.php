<?php

class Router {

    function __construct($f3) {
        $f3->route('GET @index: /', function() {
            $path = new Path();
            echo \Template::instance()->render($path->theme . '/frontpage.html');
        });
        $f3->route('GET @admin: /admin', function($f3) {
            echo \Template::instance()->render('app/public/view/admin.html');
        });
    }

}