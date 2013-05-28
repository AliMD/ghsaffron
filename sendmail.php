<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8" />
	<title>Sending mail ...</title>
	<style type="text/css">

		body {
			background-color: transparent;
		}

		.ok {
			font-size: 20px;
			color:#1A1;
		}

		.err {
			font-size: 20px;
			color:#A11;
		}
	</style>
</head>
<body>
	<?php
		error_reporting(E_ALL ^ E_NOTICE);

		$admin = 'info@ghsaffron.com';
		
		$name		= $_POST['name'];
		$tell		= $_POST['tell'];
		$email		= $_POST['mail'];
		$msg		= $_POST['msg'];
		$subject	= $_POST['subject'];
		$sent_msg = $_POST['sent_msg'];
		$err_msg = $_POST['error_msg'];

		if( strlen($name)>=3 && strlen($email)>=7 && strlen($msg)>=3 ){
			if( @mail ( $admin,"ghsaffron.co contact : $subject", "$msg\r\n\r\nMobile: $tell", "From:$admin\r\nReply-To:$name <$email>" ) ){
				echo "<h2 class='ok'>$sent_msg</h2>";
			}else{
				echo "<h2 class='ok'>$err_msg</h2>";
			}
		}else{
			echo '<h2 class="err">Error in receive data.</h2>';
		}
	?>