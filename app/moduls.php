<?php
session_start();

require('app/config.php');
require_once('app/db.php');

function get_page(){
	global $template;
	return isset($_GET['page']) ? str_replace(array('+',' ','%20'), '-', strtolower($_GET['page']) ) : $template['default_page'];
}

function get_title(){
	$title = $_GET['desc'] ? $_GET['desc'] : ($_GET['page'] ? $_GET['page'] : 'سرآغاز');
	$title = str_replace(array('-','+','%20'), ' ', $title );
	$title = str_replace(array('/'), ' | ', $title );
	return ucwords($title);
}

function console_log($msg){
	global $console_log_arr;
	$console_log_arr[] = $msg;
}

function console_log_show(){
	global $console_log_arr;
	if(!$console_log_arr) return;
	echo '<script type="text/javascript">try{';
	foreach ($console_log_arr as $log){
		$log=json_encode($log);
		echo "console.log('PHP:',$log);";
	}
	echo '}catch(e){}</script>';
	unset($console_log_arr);
}

function showunder(){
	global $template;
	if(!$_SESSION['debug']){
		header("Location: $template[url]underdev/");
		exit();
	}
}

function inc($filename,$folder='inc'){
	global $template;
	@include "$folder/$filename.php";
}

