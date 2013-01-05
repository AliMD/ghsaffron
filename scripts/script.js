// window.Zepto = 0 ; //Remove zepto for test js file in jquery;
ie = (navigator.appVersion.indexOf("MSIE") != -1) ? parseFloat(navigator.appVersion.split("MSIE")[1]) : 99;
log = function(argument){
	if(!!console['log']) console.log(argument);
};
// Clear cache options
clearCacheCheat = function(){
	var url = window.location.href,
		qsign = url.indexOf('?'),
		url = qsign>0 ? url.substr(0,qsign) : url;
	window.location.href = url+'?clear_cache='+Math.random();
};

(function($,undefined){
	
	var prdSlider={
		first : 0,
		len : 3,
		step : 870,
		autoPlay : true
	};prdSlider.left = prdSlider.first;

	$('.prd_container').css({'left':prdSlider.left});

	nextSlide = function() {
		if (prdSlider.left > -1*(prdSlider.len-1)*prdSlider.step){
			prdSlider.left -= prdSlider.step;
		}else{
			prdSlider.left = prdSlider.first;
		}
		$('.prd_container').animate({'left':prdSlider.left},700,'ease-out');
	}

	$('.product .next').click(function(){
		nextSlide();
	});

	$('.product .back').click(function(){
		if (prdSlider.left < prdSlider.first){
			prdSlider.left += prdSlider.step;
		}else{
			prdSlider.left = -1*(prdSlider.len-1)*prdSlider.step + prdSlider.first ;
		}
		$('.prd_container').animate({'left':prdSlider.left},700,'ease-out');
	});

	(autoPlayStart = function(){
		if(prdSlider.autoPlay) return ;
		autoPlay = setInterval(nextSlide, 5000);
	})();

	autoPlayStop = function(){
		clearInterval(prdSlider.autoPlay);
		prdSlider.autoPlay = false;
	};

	// Contact Form Validators
	var	emailPattern = /^[a-z0-9+_%.-]+@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i,
		tellPattern = /^[0-9)(\s+-]{11,20}$/i,
		validateText = function (str,len){
			return str.length >= len;
		},
		validateEmail = function (str){
			return emailPattern.test(str);
		},
		validateTell = function (str){
			return tellPattern.test(str);
		};

	// Contact form
	$('#contact-form').submit(function(){
		var target=$('#name'), err = false;

		target = $('#name');
		if( validateText(target.val(),3) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#subject');
		if( validateText(target.val(),5) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#tell');
		if( validateTell(target.val()) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#mail');
		if( validateEmail(target.val()) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#msg');
		if( validateText(target.val(),10) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		if(!err){
			$('#ifrm').animate({
				height:'70px'
			},700);
		}

		return !err;
	});

})(window.Zepto || window.jQuery);