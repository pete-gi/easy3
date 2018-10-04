<?php

class User {

    var $bcrypt;
    var $salt = 'ujCV5Ukc4fJYo5uLDeTbms';
    var $registerForm = 'app/public/view/auth/register.html';
    var $loginForm = 'app/public/view/auth/login.html';
    var $sessionName = '';

    function __construct() {
        $this->f3 = \Base::instance();
        $this->db = new Data('users');
        $this->bcrypt = \Bcrypt::instance();
        $session = $this->getSession();
        if ($session) {
            return $this->getByUsername($session);
        }
    }

    function showRegisterForm() {
        if ($this->isAuth()) {
            $this->f3->reroute('index');
        } else {
            echo \Template::instance()->render($this->registerForm);
        }
    }

    function showLoginForm() {
        if ($this->isAuth()) {
            $this->f3->reroute('index');
        } else {
            echo \Template::instance()->render($this->loginForm);
        }
    }

    function register($username = null, $password = null, $data = null) {
        if (!is_string($username)) {
            $username = $_POST['username'];
            $password = $_POST['password'];
        }

        if ($this->exists($username)) {
            // user already exists
            $this->f3->reroute('register');
        } else {
            // create new user
            if (!is_string($password)) {
                $password = $_POST['password'];
            }
            $hash = $this->bcrypt->hash($password, $this->salt);
    
            $this->db->mapper->insert();
            $this->db->mapper['username'] = $username;
            $this->db->mapper['password'] = $hash;
            // check for additional user data
            if (!is_array($data)) {
                if ($_POST['data']) {
                    $data = $_POST['data'];
                }
            } else {
                foreach($data as $key => $value) {
                    $this->db->mapper[$key] = $value;
                }
            }

            // save data
            if ($this->db->mapper->save()) {
                // login if registered by post, else go to @index route
                if ($_POST['username']) {
                    $this->login($username, $password);
                } else {
                    $this->f3->reroute('index');
                }
                return true;
            } else {
                return false;
            }
        }
    }

    function login($username = null, $password = null) {
        // reroute to index if already logged in
        if ($this->getSession()) {
            $this->f3->reroute('index');
            return false;
        }

        if ($this->isAuth()) {
            $this->f3->reroute('index');
        } else {
            if (!is_string($username) || !is_string($password)) {
                $username = $_POST['username'];
                $password = $_POST['password'];
            }
            $hash = $this->bcrypt->hash($password, $this->salt);

            $auth = new \Auth($this->db->mapper, array('id' => 'username', 'pw' => 'password'));
            $login = $auth->login($username, $hash);
            if ($login) {
                $this->sessionName = $username;
                $this->createSession();
                $this->f3->reroute('index');
                return true;
            } else {
                return false;
            }
        }
    }

    function logout() {
        $this->destroySession();
        $this->f3->reroute('index');
    }

    function createSession() {
        if ($this->f3->set("SESSION.user", $this->sessionName)) {
            return true;
        } else {
            return false;
        }
    }

    function getSession() {
        $s = $this->f3->get("SESSION.user", $this->sessionName);
        if ($s) {
            return $s;
        } else {
            return false;
        }
    }

    function destroySession() {
        if ($this->f3->clear("SESSION.user", $this->sessionName)) {
            return true;
        } else {
            return false;
        }
        
    }

    function isAuth() {
        $isLogged = $this->f3->get("SESSION.user", $this->sessionName);
        if ($isLogged) {
            return true;
        } else {
            return false;
        }
    }

    // get user by... functions
    function getByID($value) {
        return $this->get_by_something('id', $$value);
    }

    function getByUsername($value) {
        return $this->get_by_something('username', $$value);
    }

    function getByRole($value) {
        return $this->get_array_by_something('username', $$value);
    }

    function get_by_something($key, $value) {
        $user = $this->db->mapper->load(["@$key = ?", $value]);
        if ($user) {
            return $user;
        } else {
            return false;
        }
    }

    function get_array_by_something($key, $value) {
        $users = $this->db->mapper->find(["@$key = ?", $value]);
        if ($users) {
            return $users->cast();
        } else {
            return false;
        }
    }

    // does user exist
    function exists($username) {
        $exists = $this->db->mapper->find(['@username = ?', $username]);
        if ($exists) {
            return true;
        } else {
            return false;
        }
    }
}