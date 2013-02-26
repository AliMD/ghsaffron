<<<<<<< HEAD
=======
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


>>>>>>> refs/remotes/Mrshcom/back2mywork
(function($,undefined){

	$("div.language").css({
		'top':(window.innerHeight-450)+'px'
	});

	var menu = {"#home":0,"#aboutus":400,"#aboutsaffron":1300,"#products":2580,"#product1-detail":3491,"#product2-detail":4256,"#product3-detail":5021,"#product4-detail":5786,"#product5-detail":6551,"#product6-detail":7316,"#product7-detail":8081,"#product8-detail":8846,"#certificates":9611,"#laboratory":10376,"#contactus":11091}

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

	var startPanel = function (){
		$('div.language').animate({'bottom':'-200px'},100,function(){
			$(this).css({'display':'none'})
		});
		$('div.full-bg').animate({'height':'190px'});
		setTimeout(function(){
			$('#logo').css({'display':'block'}).animate({'opacity':'0.95'})
		},300);
		setTimeout(function(){
			$('nav menu').animate({'top':'17px'})
		},400);
		setTimeout(function(){
			$.scrollTo(menu['#aboutus'],200,'ease-in-out');
		},500);
	};

	var endPanel = function (){
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
	};

	var pages = $('.pages');
	pages.prepend('<div class="spacer"></div>');

	var	deck = new $.scrolldeck({
		buttons: null,
		slides: pages
	});

<<<<<<< HEAD
=======
	var menu = {
		"#home" : 0,
		"#aboutus" : 1800,
		"#aboutsaffron" : 4585,
		"#products" : 10485,
		"#certificates" : 13885,
		"#laboratory" : 16485,
		"#contactus" : 20525
	}
>>>>>>> refs/remotes/Mrshcom/back2mywork

	var scrollTopage = function(linkTo){
		$.scrollTo( menu[linkTo], 2000, 'ease-in-out');
		currentMenu = linkTo;
	}
<<<<<<< HEAD
	
	$("nav menu a,div.page-link > a,div.prds a").click(function(){
		scrollTopage($(this).attr("href"));
=======

	$("nav menu a,div.page-link > a").click(function(){
		var link = $(this).attr("href");
		scrollTopage(link);
		slider(0);
>>>>>>> refs/remotes/Mrshcom/back2mywork
		return false;
	});

	sleep = function(n){
		for(var i=Date.now(); Date.now()-i<n; );
	};

	setTimeout(updateScrollPos = function(){
		var reverseMenu = [];
		for(var i in menu){
			reverseMenu.push(i);
			menu[i]=-1;
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

	/*
	 * SCROLLING FUN START HERE!!!
	 *
	 */
	

	if(window.addEventListener) document.addEventListener('DOMMouseScroll', smoothScroll, false);
	document.onmousewheel = smoothScroll;

	var lastTrick = Date.now();
	function smoothScroll(e) { //param e as event
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
			if(currentMenu!="#contactus"){
				scrollTopage(nextMenu(currentMenu));
			}
		}else{
			if(currentMenu!="#aboutus"){
				scrollTopage(previousMenu(currentMenu));
			}
		}
}



})(jQuery);