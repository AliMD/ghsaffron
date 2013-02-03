(function($,undefined){
	var scrollorama = $.scrollorama({
		blocks : $('.pages'),
		offset : -300
	});

	scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
		console.log("blockIndex: "+i);
	});

	/*scrollorama.animate('.certificates-container h2',{
		delay: 100, 
		duration: 300, 
		property:'opacity', 
		start:0,
		end:1
	});*/
})(jQuery);