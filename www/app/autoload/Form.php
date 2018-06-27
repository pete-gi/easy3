<?php

class Form {

    function create($name, $layout = 'default') {
        $lang = new Lang();
        $path = new Path();
        $url = $path->form($lang->current.'/'.$name);
        $form = include($url);
        if ($layout === 'default') {
            $formLayout = $path->layout('form.html');
        } else {
            $formLayout = $path->layout($layout.'.html');
        }
        \Base::instance()->set('formData', $form);
        \Base::instance()->set('formName', $name);
        echo \Template::instance()->render($formLayout);
    }
};