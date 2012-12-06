<?php
error_reporting(E_ALL ^ E_NOTICE);

require_once('app/cache.class.php');
$cache = new MicroCache($_SERVER['QUERY_STRING']);

if($cache->check()){
	die($cache->out());
}else{
	$cache->start();
}

require_once('app/moduls.php');

isset($_GET['debug']) and $_SESSION['debug']=!!$_GET['debug'];

showunder();

$template['get'] = $_GET;
$template['page'] = get_page();
$template['debug'] = $_SESSION['debug'];
$template['title'] = 'زعفران قاسم | ' . get_title();

inc("view",'app');

$cache->end();
