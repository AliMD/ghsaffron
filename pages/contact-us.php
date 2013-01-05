<div class="content_wrap contact-us">
		<section class="w10 form">
			<form id="contact-form" action="sendmail.php" method="post" target='ifrm'>
				<input title="Name" type="text" name="name" id="name" placeholder='Name' />
				<input title="Email" type="text" name="mail" id="mail" placeholder='Email' />
				<input title="Subject" type="text" name="subject" id="subject" placeholder='Subject' />
				<textarea title="Massage" name="msg" id="msg" cols="45" rows="12" placeholder='Massage'></textarea>
				<input title="Send" class="font btn_submit" name="submit" id='btn_submit' type="submit" value="Send" />
				<input title="Reset" class="font btn_submit" name="reset" id='btn_submit' type="reset" value="Reset" />
			</form>
		</section>
		<iframe id='ifrm' name='ifrm' src="" frameborder="0" scrolling="no"></iframe>
</div>
