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
		"#certificates" : 13885,
		"#laboratory" : 16485,
		"#contactus" : 19985
	}

	var scrollTopage = function(linkTo){
		$.scrollTo( menu[linkTo], 800, 'ease-in-out');
	}

	$("nav menu a,div.page-link > a").click(function(){
		var link = $(this).attr("href");
		scrollTopage(link);
		slider(0);
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

	// product slider
	var slides = $("div.case-train div.train > div"),
		currentslide = 0;
	slider = function(n){
		if(n>=slides.length || n==0) { 
			n=0; 
			$('div.prev').addClass('arrowhide');
		}
		if(n>0) $('div.prev').removeClass('arrowhide');
		if(n<0) return false;
		$("div.case-train div.train").animate({
			'left': -(n*980) + 'px'
		},300);
		currentslide = n;
	}
	$("div.prds a").click(function(){
		var  indx = $(this).parent().index();
		slider(indx+1);
		return false;
	});
	$("div.next").click(function(){
		slider(currentslide+1);
	});
	$("div.prev").click(function(){
		slider(currentslide-1);
	});
	// product slider

	//controller.addTween('#aboutImg', TweenMax.from( $('#aboutImg'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
	//scrollorama.animate('#aboutImg',{ delay: 0, duration: 600, property:'left', start:400, end:1220 });

})(jQuery);