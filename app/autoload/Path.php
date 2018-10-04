<?php

class Path {

    function __construct() {
        $this->base = \Base::instance()->get('BASE');
        $this->theme = "view/themes/default";
    }

    function theme($filename) {
        return "view/themes/default/$filename";
    }

}