(function($,undefined){
	//setTimeout("$('header').removeClass('preload')",300);
	//setTimeout("$('#logo').removeClass('preload')",1000);
	//setTimeout("$('menu').removeClass('preload')",1400);

	var menu = {"#home":0,"#aboutus":400,"#aboutsaffron":1300,"#products":2580,"#product1-detail":3491,"#product2-detail":4256,"#product3-detail":5021,"#product4-detail":5786,"#product5-detail":6551,"#product6-detail":7316,"#product7-detail":8081,"#product8-detail":8846,"#certificates":9611,"#laboratory":10376,"#contactus":11091}

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
	}

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
	}

	var pages = $('.pages');
	pages.prepend('<div class="spacer"></div>');

	var	deck = new $.scrolldeck({
		buttons: null,
		slides: pages
	});


	var scrollTopage = function(linkTo){
		$.scrollTo( menu[linkTo], 2000, 'ease-in-out');
	}
	
	$("nav menu a,div.page-link > a,div.prds a").click(function(){
		scrollTopage($(this).attr("href"));
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
		},100)
/*
			;(function(i){
				$.scrollTo(document.height,10);
				setTimeout(function(){
					$.scrollTo(i,10);
				 	setTimeout(function(){
				 		menu[i] = window.scrollY;
						console.log(JSON.stringify(menu));
				 	},100)
				 },100);
			})(i);
			sleep(250);
		}
		*/
	},500);

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