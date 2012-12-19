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
			len:3,
			step : 870
		};prdSlider.left = prdSlider.first;

		$('.prd_container').css({'left':prdSlider.left});

		$('.next').click(function(){
			if (prdSlider.left > -1*(prdSlider.len-1)*prdSlider.step){
				prdSlider.left -= prdSlider.step;
			}else{
				prdSlider.left = prdSlider.first;
			}
			$('.prd_container').animate({'left':prdSlider.left},700,'ease-out');
		});

		$('.back').click(function(){
			if (prdSlider.left < prdSlider.first){
				prdSlider.left += prdSlider.step;
			}else{
				prdSlider.left = -1*(prdSlider.len-1)*prdSlider.step + prdSlider.first ;
			}
			$('.prd_container').animate({'left':prdSlider.left},700,'ease-out');
		});

	

})(window.Zepto || window.jQuery);