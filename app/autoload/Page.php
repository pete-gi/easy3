<?php

class Page {

    var $data;

    function __construct($data) {
        $this->db = new Data('pages');
        if (is_array($data)) {
            $this->data = $data;
        } else {
            return false;
        }
    }

    function create() {
        $this->db->mapper->insert();
        foreach($this->data as $key => $val) {
            $this->db->mapper[$key] = $val;
        }
        if ($this->db->mapper->save()) {
            return true;
        } else {
            return false;
        }
    }

}