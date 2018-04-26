<?php

class Lang {

    var $multilang;
    var $current;

    function __construct() {
        $f3 = \Base::instance();
        $conf = $f3->get('config');
        $config = new Config($conf);
        if ($config->multilang) {
            $this->multilang = true;
        } else {
            $this->multilang = false;
        }
        $this->current = $this->getCurrentFromLocale();
    }

    function getCurrentFromLocale() {
        $locale = \Base::instance()->get('LANGUAGE');
        $comaPosition = strpos($locale, ',');
        $hyphenPosition = strpos($locale, '-');
        $position = $comaPosition > $hyphenPosition ? $hyphenPosition : $comaPosition;
        $lang = substr($locale, 0, $position);
        
        $routesData = include('config/routing.php');
        if (!$routesData[$lang]) {
            $lang = \Base::instance()->get('FALLBACK');
        }

        return $lang;
    }

}