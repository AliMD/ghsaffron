<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8" />
	<title>Sending mail ...</title>
	<style type="text/css">

		body {
			background-color: transparent;
			direction: rtl;
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
		$email		= $_POST['mail'];
		$msg		= $_POST['msg'];
		$subject	= $_POST['subject'];

		if( strlen($name)>=3 && strlen($email)>=7 && strlen($subject)>=5 && strlen($msg)>=8 ){
			if( @mail ( $admin,"ghsaffron.co contact : $subject", $msg, "From:$admin\r\nReply-To:$name <$email>" ) ){
				echo '<h2 class="ok">Thank you, Your mail has been sent</h2>';
			}else{
				echo '<h2 class="err">Error in sending mail. Please try again</h2>';
			}
		}else{
			echo '<h2 class="err">Error in receive data</h2>';
		}
	?>
</body>
</html>