;(function($,undefined){
	var prefix= ($.browser.webkit)  ? '-webkit-' :
				($.browser.mozilla) ? '-moz-' : 
				($.browser.msie)    ? '-ms-' :
				($.browser.opera)   ? '-o-' : '',

		menu = {"#home":0,"#aboutus":400,"#aboutsaffron":1300,"#products":2580,"#certificates":9611,"#laboratory":10376,"#contactus":11091}

	$(".logo-intro").css(prefix+'transform',"scale(1.4)"); // scale logo for intro
	
	$("div.language").css({
		'top':(window.innerHeight-400)+'px'
	});

	var startPanel = function (){
		$.scrollTo(0,1);
		$('div.full-bg').animate({'height':'190px'},800);
		setTimeout(function(){
			$('section.flags').animate({'opacity':'0'},300,function(){
				$(this).css({'display':'none'});
			});
		},100);
		setTimeout(function(){
			//$('div.full-bg').animate({'height':'190'},400);
			$('.language').animate({'top':'110px'},400);
			//$(".logo-intro").removeClass("biglogo").addClass("smalllogo"); // scale(.7)
			$(".logo-intro").css(prefix+'transform',"scale(1)");
		},400);
		setTimeout(function(){
			$('nav menu').animate({'top':'17px'});
		},600);
		setTimeout(function(){
			$.scrollTo(menu["#aboutus"],300);
		},700);
	},
	endPanel = function (){
		$('nav menu').animate({'top':'-117px'},400);
		setTimeout(function(){
			$(".logo-intro").removeClass("smalllogo").addClass("biglogo"); // scale(1)
			$('.language').animate({'top':(window.innerHeight-450)+'px'});
			$('div.full-bg').animate({'height':'425'})
		},200)
		setTimeout(function(){
			$('div.full-bg').animate({'height':'825px'},300)
		},400);
		setTimeout(function(){
			$('section.flags').css({'display':'block'}).animate({'opacity':'1'},300);
		},900);
	}


	var currentMenu = "#aboutus";
	var nextMenu = function(c) { //return the next menu from c
		var flag = false;
		for(var i in menu) {
			if(flag) break;
			if(i===c) flag = true;
		}
		return i;
	};
	var previousMenu = function(c) { //return the previous menu from c
		var prev = "";
		for(var i in menu) {
			if(i===c) break;
			prev = i;
		}
		return prev;
	};

	var pages = $('.pages');
	pages.prepend('<div class="spacer"></div>');

	var	deck = new $.scrolldeck({
		buttons: null,
		slides: pages
	});


	var scrollTopage = function(linkTo){
		$.scrollTo( menu[linkTo], 1500, 'easeOutExpo');
		currentMenu = linkTo;
	}

	
	$("nav menu a,div.page-link > a").click(function(){
		var link = $(this).attr("href");
		scrollTopage(link);
		slider(0);
		return false;
	});

	var sleep = function(n){
		for(var i=Date.now(); Date.now()-i<n; );
	};

	setTimeout(updateScrollPos = function(){
		var reverseMenu = [];
		for(var i in menu){
			reverseMenu.push(i);
		}
		reverseMenu.reverse();
		i=0;
		$.scrollTo(document.height,10);
		setTimeout(updateNextScrollPos=function(){
			$.scrollTo(reverseMenu[i],10);
			setTimeout(function(){
				menu[reverseMenu[i]]= window.scrollY;
				i++;
				if(i<reverseMenu.length){
					updateNextScrollPos();
				}else{
					console.log(JSON.stringify(menu));
				}
			},100);
		},100);
	},500);

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
		currentslide = 0,
		nextBtn = $('div.next'),
		prevBtn = $('div.prev');

	var slider = function(n){
		if(n<0 || n==currentslide || n>slides.length-1) return false; // break code

		if(n==0){
			prevBtn.hasClass('arrowhide') || prevBtn.addClass('arrowhide');
		}else{
			prevBtn.hasClass('arrowhide') && prevBtn.removeClass('arrowhide');
		}

		if(n==slides.length-1){
			nextBtn.hasClass('arrowhide') || nextBtn.addClass('arrowhide');
		}else{
			nextBtn.hasClass('arrowhide') && nextBtn.removeClass('arrowhide');
		}

		$("div.case-train div.train").animate({
			'left': -(n*980) + 'px'
		},400,'easeOutBack');

		currentslide = n;
	}

	$("div.prds a").click(function(){
		var  indx = $(this).parent().index();
		slider(indx+1); // skip first slide (prd links)
		return false;
	});

	nextBtn.click(function(){
		slider(currentslide+1);
	});

	prevBtn.click(function(){
		slider(currentslide-1);
	});

	/*
	 * SCROLLING FUN START HERE!!!
	 */

	var lastTrick = Date.now(),
	smoothScroll = function (e) { //param e as event
		if(Date.now()-lastTrick<500){
			lastTrick = Date.now();
			 return;
		}

		lastTrick = Date.now();

		var delta = 0;
		if (!event) event = window.event;

		// normalize the delta
		if (event.wheelDelta) {
			// IE & Opera
			delta = event.wheelDelta / 60;
		} else if (event.detail) {
			// W3C
			delta = -event.detail / 2;
		}

		console.log(delta);

		//some extra normalization
		delta *= 10;
		if(delta < 0){
			if(currentMenu!="#contactus"){ // skip last
				scrollTopage(nextMenu(currentMenu));
			}
		}else{
			if(currentMenu!="#aboutus"){ // skip first
				scrollTopage(previousMenu(currentMenu));
			}
		}
	}

	if(window.addEventListener) document.addEventListener('DOMMouseScroll', smoothScroll, false);
	document.onmousewheel = smoothScroll;

})(jQuery);
