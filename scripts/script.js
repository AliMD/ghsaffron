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
		$(".logo-intro").removeClass("biglogo").addClass("smalllogo"); // scale(.7)
	},300)
	setTimeout("$('nav menu').animate({'top':'17px'})",400);
	setTimeout("$.scrollTo(1800,200,'ease-in-out')",500);
}

function endPanel(){
	$('nav menu').animate({'top':'-117px'});
	setTimeout(function(){
		$(".logo-intro").removeClass("smalllogo").addClass("biglogo"); // scale(1)
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

	var widthSlide = ($(window).width()<1024) ? 620:980;
	function resize() {
		var wh = $(window).width();
		widthSlide = (wh<1024) ? 620:980;
		console.log(wh);
		$('div.show-res').html('width: ' + wh);
	};
	var resizeTimer;
	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(resize, 200);
	});


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
		"#products" : 11185,
		"#certificates" : 14085,
		"#laboratory" : 16785, 
		"#contactus" : 21020
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
		//widthSlide = ($(window).width()<1024) ? 620:980;
	slider = function(n){
		if(n>slides.length-1 || n==0) { 
			n=0; 
			$('div.prev').addClass('arrowhide');
		}
		if(n>0) $('div.prev').removeClass('arrowhide');
		if(n<0 || n==currentslide) return false;
		$("div.case-train div.train").animate({
			'left': -(n*widthSlide) + 'px'
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

})(jQuery);