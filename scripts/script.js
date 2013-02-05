(function($,undefined){
	setTimeout("$('header').removeClass('preload')",300);
	setTimeout("$('#logo').removeClass('preload')",1000);
	setTimeout("$('menu').removeClass('preload')",1400);

	/*
	var pages = $('.pages'),
		scrollorama = $.scrollorama({
			blocks : pages,
			offset : -320,
			enablePin : false
		});

	scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
		pages.removeClass('active').eq(i).addClass('active');
		console.log("blockIndex: "+i);
	});

	scrollorama.animate($('#aboutus h1'),{
		delay: 200, 
		duration: 250, 
		property:'left', 
		start:-300,
		end:0
	});

	scrollorama.animate($('#aboutus .spacer'),{
		delay: 200,
		duration: 250,
		property:'height',
		start:0,
		end:200
	});
*/
	var pages = $('.pages');
	pages.prepend('<div class="spacer"></div>')

	var	deck = new $.scrolldeck({
			buttons: 'nav a',
			slides: pages,
			offset: -300
		});


	//console.log(deck.controller)

})(jQuery);