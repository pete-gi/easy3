<?php

class Area {

    var $db, $mapper;
    var $page;
    var $lang;

    function __construct() {
        $this->db = new \DB\Jig('app/data/');
        $this->mapper = new \DB\Jig\Mapper($this->db, 'area');
        $this->page = $this->getPageByPath();
    }

    function getPageByPath() {
        $f3 = \Base::instance();
        $path = $f3->get('PATH');
        $page = array_search($path, $f3->get('ALIASES'));
        return $page;
    }

    function set($areaname, $global = false) {
        $lang = new Lang();
        $user = new User();
        $isLoggedIn = $user->getAuth();
       
        if ($global) {
            $this->page = 'global';
        } else {
            $this->page = $this->getPageByPath();
        }

        $content = $this->get($this->page, $areaname);

        if ($content) {
            if($isLoggedIn) {
                echo "<div data-editable data-lang='".$lang->current."' data-page='".$this->page."' data-global data-name='$areaname'>$content</div>";
            } else {
                echo $content;
            }
        } else {
            $this->mapper->insert();
            $this->mapper['page'] = $this->page;
            $this->mapper['area'] = $areaname;
            $this->mapper['lang'] = $lang->current;
            $this->mapper['content'] = '';
            $this->mapper->save();
            if($isLoggedIn) {
                echo "<div data-editable data-lang='".$lang->current."' data-page='".$this->page."' data-name='$areaname'>$content</div>";
            } else {
                echo $content;
            }
        }
    }

    function get($page, $areaname) {
        $lang = new Lang();
        if ($this->mapper->load(['@page = ? and @area = ? and @lang = ?', $page, $areaname, $lang->current])) {
            return $this->mapper['content'];
        } else {
            return false;
        }
    }

    function save() {
        $data = $_POST;
        foreach($data as $key => $val) {
            $pageAndArea = explode(',', $key);
            $page = $pageAndArea[0];
            $area = $pageAndArea[1];
            $lang = $pageAndArea[2];
            if ($this->mapper->load(['@page = ? and @area = ? and @lang = ?', $page, $area, $lang])) {
                $this->mapper['content'] = trim($val);
                $this->mapper->save();
            }
        }
    }
}