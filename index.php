<?php

$f3 = require('app/lib/base.php');
$f3->config('app/config/config.ini');
$app = new App($f3);
$app->start();