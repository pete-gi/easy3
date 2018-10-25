<?php

class Component {

    function __construct() {
        $path = new Path();
        $this->dir = $path->components();
    }

}