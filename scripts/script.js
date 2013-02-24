function startPanel(){
	$('div.language').animate({'bottom':'-200px'},100,function(){
		$(this).css({'display':'none'})
	});
	$('div.full-bg').animate({'height':'190px'});
	setTimeout("$('#logo').css({'display':'block'}).animate({'opacity':'0.95'})",300);
	setTimeout("$('nav menu').animate({'top':'17px'})",400);
	setTimeout("$.scrollTo(1800,200,'ease-in-out')",500);
}

function endPanel(){
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
}


(function($,undefined){
	//setTimeout("$('header').removeClass('preload')",300);
	//setTimeout("$('#logo').removeClass('preload')",1000);
	//setTimeout("$('menu').removeClass('preload')",1400);

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
		"#products" : 10485,
		"#product1-detail" : 13885,
		"#product2-detail" : 16485,
		"#product3-detail" : 19285,
		"#product4-detail" : 22085,
		"#product5-detail" : 24885,
		"#product6-detail" : 27685,
		"#product7-detail" : 30285,
		"#product8-detail" : 33085,
		"#certificates" : 35785,
		"#laboratory" : 38585,
		"#contactus" : 42495
	}

	var scrollTopage = function(linkTo){
		$.scrollTo( menu[linkTo], 2000, 'ease-in-out');
	}

	$("nav menu a,div.page-link > a,div.prds a").click(function(){
		scrollTopage($(this).attr("href"));
		return false;
	});

	$('div.language a.active').click(function(){
		startPanel();
		return false;
	});

	$("a[href='#home']").click(function(){
		endPanel();
		return false;
	});

	//controller.addTween('#aboutImg', TweenMax.from( $('#aboutImg'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
	//scrollorama.animate('#aboutImg',{ delay: 0, duration: 600, property:'left', start:400, end:1220 });

})(jQuery);