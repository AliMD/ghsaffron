(function($,undefined){
	setTimeout("$('header').removeClass('preload')",300);
	setTimeout("$('#logo').removeClass('preload')",1000);
	setTimeout("$('menu').removeClass('preload')",1400);

	var pages = $('.pages');
	pages.prepend('<div class="spacer"></div>')

	var	deck = new $.scrolldeck({
			buttons: 'nav a',
			slides: pages,
			offset: -300
		});

	$('div.language a').click(function(){
		$('div.language').animate({'bottom':'-200px'},100,function(){
			$(this).css({'display':'none'})
		});
		$('div.full-bg').animate({'height':'190px'});
		setTimeout("$('#logo').css({'display':'block'}).animate({'opacity':'0.95'})",300);
		setTimeout("$('nav menu').animate({'top':'17px'})",400);
	});

	$("a[href='#home']").click(function(){
		$('nav menu').animate({'top':'-117px'});
		setTimeout(function(){
			$('#logo').animate({'opacity':'0'},400,function(){
				$(this).css({'display':'none'})
			})
		},100);
		setTimeout("$('div.full-bg').animate({'height':'825px'})",200);
		setTimeout(function(){
			$('div.language').css({'display':'block'}).animate({'bottom':'200px'});
		},400);
	});

})(jQuery);