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
	// Website js

	

})(window.Zepto || window.jQuery);