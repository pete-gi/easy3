<?php

class Config {

    function __construct($arr) {
        foreach($arr as $key => $val) {
            $this->$key = $val;
        }
    }

}