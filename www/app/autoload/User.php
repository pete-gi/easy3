<?php

class User {

    var $db, $mapper;
    var $bcrypt;
    var $salt = 'ujCV5Ukc4fJYo5uLDeTbms';

    function __construct() {
        $this->db = new \DB\Jig('app/data/');
        $this->mapper = new \DB\Jig\Mapper($this->db, 'users');
        $this->bcrypt = \Bcrypt::instance();
    }

    function register() {
        $username = \Base::instance()->get('PARAMS.username');
        $password = \Base::instance()->get('PARAMS.password');
        $hash = $this->bcrypt->hash($password, $this->salt);

        $this->mapper->insert();
        $this->mapper['username'] = $username;
        $this->mapper['password'] = $hash;

        $this->mapper->save();
        $f3->reroute('index');
    }

    function loginForm() {
        echo \Template::instance()->render('layouts/login.html');
    }

    function login() {
        $f3 = \Base::instance();
        $f3->set('DB', $this->db);
        $db = $f3->get('DB');
        $f3->get('SESSION');

        $username = $_POST['username'];
        $password = $_POST['password'];
        $hash = $this->bcrypt->hash($password, $this->salt);
        $auth = new \Auth($this->mapper, array('id' => 'username', 'pw' => 'password'));
        $login = $auth->login($username, $hash);
        if ($login) {
            new \DB\JIG\Session($db);
            $f3->set("SESSION.$username", 123);
            $f3->reroute('index');
        } else {
            $f3->set('login_message', 'Nie udało się zalogować');
            $f3->reroute('login');
        }
    }

    function logout() {
        $f3 = \Base::instance();
        $f3->clear('SESSION');
        $f3->reroute('index');
    }

    function isAuth($username) {
        $f3 = \Base::instance();
        $isLogged = $f3->get("SESSION.$username");
        if ($isLogged) {
            return true;
        } else {
            return false;
        }
    }

    function getAuth() {
        $f3 = \Base::instance();
        $session = $f3->get("SESSION");
        if ($session) {
            return key($session);
        } else {
            return false;
        }
    }
}