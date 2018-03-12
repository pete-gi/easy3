<?php

class Form {

    function create($name) {
        $lang = new Lang();
        $path = new Path();
        $url = $path->form($lang->current.'/'.$name);
        $form = include($url);
        $layout = $path->layout('form.html');
        \Base::instance()->set('formData', $form);
        \Base::instance()->set('formName', $name);
        echo \Template::instance()->render($layout);
    }
};