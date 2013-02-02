<div class="content_wrap contact-us">
	<section class="form cover">
		<form id="contact-form" action="sendmail.php" method="post" target='ifrm'>
			<div class="inputs right">
				<input title="Name" type="text" name="name" id="name" placeholder='نام' />
				<input title="Email" type="text" name="mail" id="mail" placeholder='ایمیل' />
				<input title="Tell" type="text" name="tell" id="tell" placeholder='تلفن' />
				<input title="Subject" type="text" name="subject" id="subject" placeholder='موضوع' />
			</div>
				<textarea title="Massage" name="msg" id="msg" cols="45" rows="12" placeholder='متن پیام'></textarea>
			<input title="Reset" class="font btn_submit left" name="reset" id='btn_submit' type="reset" value="پاک کردن" />
			<input title="Send" class="font btn_submit left" name="submit" id='btn_submit' type="submit" value="ارسال" />
		</form>
		<iframe id='ifrm' name='ifrm' src="" frameborder="0" scrolling="no"></iframe>
	</section>
</div>
