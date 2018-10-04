<?php

class Lang {

    var $multilang;
    var $current = 'en';

    function __construct() {
    //     $f3 = \Base::instance();
    //     $conf = $f3->get('config');
    //     $config = new Config($conf);
    //     if ($config->multilang) {
    //         $this->multilang = true;
    //         if ($this->current === null) {
    //             $this->current = $this->getCurrentFromLocale();
    //         }
    //     } else {
    //         $this->multilang = false;
    //         $this->current = $config->defaultLang;
    //     }

    //     if ($this->current == false) {
    //         $this->current = $f3->get('FALLBACK');
    //     }
        
    // }

    // function getCurrentFromLocale() {
    //     $uri = $_SERVER['REQUEST_URI'];
    //     $base = \Base::instance()->get('BASE');
        
    //     $lang = substr($uri, strlen($base)+1, strlen($base)+3);
    //     if (strlen($lang) > 2) {
    //         $lang = substr($lang, 0, 2);
    //     }
    //     return $lang;
    }

}