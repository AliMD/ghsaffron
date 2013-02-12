(function($,undefined){
	setTimeout("$('header').removeClass('preload')",300);
	setTimeout("$('#logo').removeClass('preload')",1000);
	setTimeout("$('menu').removeClass('preload')",1400);

	var pages = $('.pages');
	pages.prepend('<div class="spacer"></div>');

	var	deck = new $.scrolldeck({
			buttons: 'nav a img',
			slides: pages,
			offset: -300
		});

	var menu = {
		"#home" : 0,
		"#aboutus" : 1800,
		"#aboutsaffron" : 4585,
		"#products" : 7485,
		"#product1-detail" : 10785,
		"#product2-detail" : 13685,
		"#product3-detail" : 16485,
		"#product4-detail" : 19185,
		"#product5-detail" : 21785,
		"#product6-detail" : 24585,
		"#product7-detail" : 27285,
		"#product8-detail" : 30085,
		"#certificates" : 32850,
		"#laboratory" : 35750,
		"#contactus" : 39450
	}

	var scrollTopage = function(linkTo){
		$.scrollTo( menu[linkTo], 800, 'ease-in-out');
	}

	$("nav menu a").click(function(){
		scrollTopage($(this).attr("href"));
		return false;
	});

	$("div.page-link > a").click(function(){
		scrollTopage($(this).attr("href"));
		return false;
	});

	$('div.language a').click(function(){
		$('div.language').animate({'bottom':'-200px'},100,function(){
			$(this).css({'display':'none'})
		});
		$('div.full-bg').animate({'height':'190px'});
		setTimeout("$('#logo').css({'display':'block'}).animate({'opacity':'0.95'})",300);
		setTimeout("$('nav menu').animate({'top':'17px'})",400);
		setTimeout("$.scrollTo(1800,200,'ease-in-out')",500);
	});

	$("a[href='#home']").click(function(){
		$('nav menu').animate({'top':'-117px'});
		setTimeout(function(){
			$('#logo').animate({'opacity':'0'},400,function(){
				$(this).css({'display':'none'});
			});
		},100);
		setTimeout("$('div.full-bg').animate({'height':'825px'})",200);
		setTimeout(function(){
			$('div.language').css({'display':'block'}).animate({'bottom':'100px'});
		},400);
	});

	//controller.addTween('#aboutImg', TweenMax.from( $('#aboutImg'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
	scrollorama.animate('#aboutImg',{ delay: 0, duration: 600, property:'left', start:400, end:1220 });

})(jQuery);