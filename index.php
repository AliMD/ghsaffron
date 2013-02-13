<?php
error_reporting(E_ALL ^ E_NOTICE);

isset($_GET['debug']) and $_SESSION['debug']=!!$_GET['debug'];

if(!$_SESSION['debug']){
	header("Location: underdev/");
	exit();
}else{
	header("Location: home_fa.html");
}

