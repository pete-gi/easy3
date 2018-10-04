<?php

class Data {

    var $dir = 'app/data/';

    function __construct($name) {
        $this->db = new \DB\Jig($this->dir);
        $this->mapper = new \DB\Jig\Mapper($this->db, $name);
    }
}