<?php

class Pages {

    function __construct() {
        $this->db = new Data('pages');
    }

    function list() {
        $this->db->mapper->load();
        if ($this->db->mapper->count() > 0) {
            $list = [];
            for($i = 0; $i < $this->db->mapper->count(); $i++) {
                $list[] = $this->db->mapper->cast();
                $this->db->mapper->next();
            }
            echo json_encode($list);
        } else {
            echo false;
        }
    }

    function add() {
        $data = $_POST;
        $page = new Page($data);
        if ($page->create()) {
            echo true;
        } else {
            echo false;
        }
    }

    function get() {
        $id = $_POST['id'];
        $page = $this->db->mapper->load(['@_id = ?', $id]);
        if ($page) {
            echo json_encode($page->cast());
        } else {
            echo false;
        }
    }

    function remove() {
        $id = $_POST['id'];
        $page = $this->db->mapper->load(['@_id = ?', $id]);
        if ($page) {
            $page->erase();
            echo true;
        } else {
            echo false;
        }
    }

}