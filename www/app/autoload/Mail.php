<?php

class Mail {

    var $data;
    var $from;
    var $to;
    var $layout;
    var $headers;
    var $recaptcha = null;
    
    function create() {
        $this->data = $_POST;
        $this->from = $this->data['from'];
        $this->to = $this->data['to'];
        $this->template = $this->data['template'];
        $this->createData();
        $this->createLayout();
        $this->createHeaders();
        $this->topic = "=?utf-8?B?" . base64_encode($this->data['topic']) . "?=";

        $this->check();
    }

    function createData() {
        foreach($this->data as $key => $val) {
            $this->$key = $val;
        }
    }

    function createLayout() {
        $path = new Path();
        $layout_path = $path->layout($this->template . '.html');

        \Base::instance()->set('form', $this);
        $this->layout = Template::instance()->render($layout_path, 'text/html');
    }

    function createHeaders() {
        $this->headers = "From: " . $this->data['name'] . " <". $this->from .">" . "\r\n" .
                "Reply-To: " . $this->data['name']  . " <" . $this->data['email']  . ">" . "\r\n" .
                "Content-Type: text/html; charset=utf-8" . "\r\n";
    }

    function validateReCaptcha() {
        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $postVars = [
            'secret' => $this->data['secretKey'],
            'response' => $this->data['g-recaptcha-response']
        ];
        $options = [
            'method' => 'POST',
            'content' => http_build_query($postVars),
        ];
        $result = \Web::instance()->request($url, $options);
        $response = json_decode($result['body']);

        if ($response->success === true) {
            return true;
        } else {
            return false;
        }
    }

    function check() {
        $config = new Config(\Base::instance()->get('config'));
        if ($config->recaptcha) {
            if ($this->validateReCaptcha()) {
                $this->send();
            } else {
                \Base::instance()->error(500);
            }
        } else {
            $this->send();
        }
    }

    function send() {
        mail($this->to, $this->topic, $this->layout, $this->headers);
    }

};