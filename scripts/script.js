function startPanel(){
	$('div.full-bg').animate({'height':'425px'},300);
	setTimeout(function(){
		$('section.flags').animate({'opacity':'0'},200,function(){
			$(this).css({'display':'none'});
		});
	},100);
	setTimeout("$('div.full-bg').animate({'height':'190'})",300);
	setTimeout("$('.language').animate({'top':'80'})",300);
	setTimeout(function(){
		$(".logo-intro").css({
			'-webkit-transform': 'scale(0.7)'
		}).addClass("rotate");
	},300)
	setTimeout("$('nav menu').animate({'top':'17px'})",400);
	setTimeout("$.scrollTo(1800,200,'ease-in-out')",500);
}

function endPanel(){
	$('nav menu').animate({'top':'-117px'});
	setTimeout(function(){
		$(".logo-intro").css({
			'-webkit-transform': 'scale(1)'
		}).removeClass("rotate");
	},200)
	setTimeout(function(){
		$('.language').animate({'top':(window.innerHeight-450)+'px'});
	},200);
	setTimeout("$('div.full-bg').animate({'height':'425'})",200);
	setTimeout("$('div.full-bg').animate({'height':'825px'},300)",400);
	setTimeout(function(){
		$('section.flags').css({'display':'block'}).animate({'opacity':'1'},300);
	},900);
}


(function($,undefined){
	//setTimeout("$('header').removeClass('preload')",300);
	//setTimeout("$('#logo').removeClass('preload')",1000);
	//setTimeout("$('menu').removeClass('preload')",1400);

	$("div.language").css({
		'top':(window.innerHeight-450)+'px'
	});

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
		"#contactus" : 20525
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
		if(n>slides.length-1 || n==0) { 
			n=0; 
			$('div.prev').addClass('arrowhide');
		}
		if(n>0) $('div.prev').removeClass('arrowhide');
		if(n<0 || n==currentslide) return false;
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