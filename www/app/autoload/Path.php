<?php

class Path {

    function base() {
        return \Base::instance()->get('BASE');
    }

    function url($page) {
        $lang = new Lang();
        if ($lang->multilang) {
            return \Base::instance()->get('BASE') . '/' . $lang->current . Page::get($page)['url'];
        } else {
            return \Base::instance()->get('BASE') . Page::get($page)['url'];
        }
    }

    function mail() {
        
        $lang = new Lang();
        if ($lang->multilang) {
            return \Base::instance()->get('BASE') . '/' . $lang->current . '/send-mail';
        } else {
            return \Base::instance()->get('BASE') . '/send-mail';
        }
    }

    function href($page) {
        $lang = new Lang();
        if ($lang->multilang) {
            return \Base::instance()->get('BASE') . '/' . $lang->current . Page::get($page)['url'];
        } else {
            return \Base::instance()->get('BASE') . Page::get($page)['url'];
        }
    }

    function img($file) {
        return \Base::instance()->get('BASE')  . '/' . 'view/'  . "assets/img/$file";
    }

    function css($file) {
        return \Base::instance()->get('BASE')  . '/' . 'view/'  . "assets/css/$file";
    }

    function js($file) {
        return \Base::instance()->get('BASE')  . '/' . 'view/'  . "assets/js/$file";
    }

    function file($file) {
        return \Base::instance()->get('BASE')  . '/' . 'view/'  . "assets/files/$file";
    }

    function gallery($dir = null) {
        return 'view/'  . "assets/gallery/$dir";
    }

    function galleryFile($dir = null) {
        return \Base::instance()->get('BASE')  . '/' . 'view/'  . "assets/gallery/$dir";
    }

    function page($name) {
        return "view/pages/$name.html";
    }

    function realpagepath($name) {
        return \Base::instance()->get('BASE')  . '/' . 'view/'  . "pages/$name.html";
    }

    function partial($name) {
        return "view/partials/$name.html";
    }

    function layout($name) {
        return "view/layouts/$name";
    }

    function error($name) {
        return "view/error/$name.html";
    }

    function form($name) {
        return "view/forms/$name.php";
    }

}