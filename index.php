<?php
error_reporting(E_ALL ^ E_NOTICE);

require_once('app/cache.class.php');
$cache = new MicroCache("index ".strtolower($_GET['page']).$_GET['cat']);

$cache->lifetime = 7*24*60*60; // 1 week
$cache->patch = 'cachetmp/';

if(!isset($_GET['clear_cache']) && $cache->check()){
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

db_close();

$cache->end();
