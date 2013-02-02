<div class="content_wrap contact-us">
	<section class="form cover">
		<form id="contact-form" action="sendmail.php" method="post" target='ifrm'>
			<div class="input-left left">
				<input title="Name" type="text" name="name" id="name" placeholder='Name' />
				<input title="Email" type="text" name="mail" id="mail" placeholder='Email' />
				<input title="Tell" type="text" name="tell" id="tell" placeholder='Tell' />
				<input title="Subject" type="text" name="subject" id="subject" placeholder='Subject' />
			</div>
				<textarea title="Massage" name="msg" id="msg" cols="45" rows="12" placeholder='Massage'></textarea>
			<input title="Send" class="font btn_submit right" name="submit" id='btn_submit' type="submit" value="Send" />
			<input title="Reset" class="font btn_submit right" name="reset" id='btn_submit' type="reset" value="Reset" />
		</form>
		<iframe id='ifrm' name='ifrm' src="" frameborder="0" scrolling="no"></iframe>
	</section>
</div>
