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
			color:#1A1;
		}

		.err {
			color:#A11;
		}
	</style>
</head>
<body>
	<?php
		error_reporting(E_ALL ^ E_NOTICE);

		$admin = 'info@mydomain.com';
		
		$name		= $_POST['name'];
		$tell		= $_POST['tell'];
		$email		= $_POST['mail'];
		$msg		= $_POST['msg'];
		$subject	= $_POST['subject'];

		if( strlen($name)>=3 && strlen($email)>=7 && strlen($subject)>=5 && strlen($msg)>=8 && strlen($tell)>=11 ){
			if( @mail ( $admin,"ghsaffron.co contact : $subject", "$msg\r\n\r\nMobile: $tell", "From:$admin\r\nReply-To:$name <$email>" ) ){
				echo '<h2 class="ok">Thank you! Your massage has been send.</h2>';
			}else{
				echo '<h2 class="err">Error in sending mail. Please try again!</h2>';
			}
		}else{
			echo '<h2 class="err">Error in receive data.</h2>';
		}
	?>