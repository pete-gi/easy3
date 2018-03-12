<?php

class Path {

    function base() {
        return \Base::instance()->get('BASE');
    }

    function url($page) {
        $lang = new Lang();
        if ($lang->multilang) {
            return \Base::instance()->get('BASE')  . '/' . $lang->current . Page::get($page)['url'];
        } else {
            return \Base::instance()->get('BASE')  . Page::get($page)['url'];
        }
        
    }

    function href($page) {
        $lang = new Lang();
        if ($lang->multilang) {
            return \Base::instance()->get('BASE')  . '/' . $lang->current . Page::get($page)['url'];
        } else {
            return \Base::instance()->get('BASE')  . Page::get($page)['url'];
        }
    }

    function img($file) {
        return \Base::instance()->get('BASE')  . '/' . \Base::instance()->get('UI')  . "assets/img/$file";
    }

    function css($file) {
        return \Base::instance()->get('BASE')  . '/' . \Base::instance()->get('UI')  . "assets/css/$file";
    }

    function js($file) {
        return \Base::instance()->get('BASE')  . '/' . \Base::instance()->get('UI')  . "assets/js/$file";
    }

    function file($file) {
        return \Base::instance()->get('BASE')  . '/' . \Base::instance()->get('UI')  . "assets/files/$file";
    }

    function gallery($dir = null) {
        return \Base::instance()->get('UI')  . "assets/gallery/$dir";
    }

    function galleryFile($dir = null) {
        return \Base::instance()->get('BASE')  . '/' . \Base::instance()->get('UI')  . "assets/gallery/$dir";
    }

    function page($name) {
        return "pages/$name.html";
    }

    function realpagepath($name) {
        return \Base::instance()->get('BASE')  . '/' . \Base::instance()->get('UI')  . "pages/$name.html";
    }

    function partial($name) {
        return "partials/$name.html";
    }

    function layout($name) {
        return "layouts/$name";
    }

    function form($name) {
        return \Base::instance()->get('UI')  . "forms/$name.php";
    }

}