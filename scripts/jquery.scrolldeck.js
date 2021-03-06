/*
	scrolldeck - jQuery scrolldeck to create a vertically scrolling presentation deck
	by John Polacek (@johnpolacek)
	
	Dual licensed under MIT and GPL.
*/

(function($) {
    $.scrolldeck = function(options) {
		
		
		// VARS
		
		var currIndex = 0,
			buttons,
			slides,
			scrollpoints = [],
			sections = [],
			windowHeight = $(window).height(),
			i;
		
		var defaults = {
			buttons: '.nav-button',
			slides: '.slide',
			duration: 600,
			easing: 'easeInOutExpo',
			offset: 0
		};
		
		
		// INIT
		
		var scrolldeck = this;
		scrolldeck.settings = {};
			
		var init = function() {
			
			scrolldeck.settings = $.extend({}, defaults, options);
			
			buttons = $(scrolldeck.settings.buttons);
			slides = $(scrolldeck.settings.slides);
			scrolldeck.controller = $.scrollorama({blocks:slides, offset:scrolldeck.settings.offset});
			
			// add animations with scrollorama
			var anim;
			// ANIMATE INS
			var animateIn = $('.animate-in');
			for (i=0; i<animateIn.length; i++) {
				anim = animateIn.eq(i);
				switch (anim.attr('data-animation')) {
					case 'fly-in-left':
						anim
							.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: windowHeight*0.25, duration: windowHeight*0.2, property:'left', start:-500 });
						break;
					case 'fly-in-right':
						anim
							.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: windowHeight*0.25, duration: windowHeight*0.2, property:'right', start:-1300 });
						break;
					case 'space-in':
						scrolldeck.controller.animate(anim, { delay: windowHeight*0.8, duration: windowHeight*0.2, property:'letter-spacing', start:40 });
						scrolldeck.controller.animate(anim, { delay: windowHeight*0.8, duration: windowHeight*0.2, property:'opacity', start:0 });
						break;
					default:
						scrolldeck.controller.animate(anim, { delay: windowHeight*0.25, duration: windowHeight*0.2, property:'opacity', start:0 });
				}
			}
			
			// ANIMATE BUILDS
			var animateBuild = $('.animate-build');
			for (i=0; i<animateBuild.length; i++) {
				anim = animateBuild.eq(i);
				switch (anim.attr('data-animation')) {
					case 'fly-in-left':
						anim.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'left', start:-800, pin:true });
						break;
					case 'fly-in-right':
						anim.parent().css('overflow','hidden');
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'right', start:-900, pin:true });
						break;
					case 'space-in':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'letter-spacing', start:40, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						break;
					case 'fade-in':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						break;
					case 'fly-in-bot':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'top', start:300, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						break;
					case 'fly-in-rotate':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'top', start:300, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 300, property:'scale', start:0.1, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'rotate', start:100, pin:true });
						break;
					case 'fly-in-scale':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 300, property:'top', start:300, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 300, property:'opacity', start:0, pin:true });
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 300, property:'scale', start:0.1, pin:true });
						break;
					case 'fly-in-left-pic2':
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'left', start:-800,end:108, pin:true });
						break;
					case 'fly-in-left-bot':
						scrolldeck.controller.animate(anim, { delay: ((anim.attr('data-build')-1)*400), duration: 1000, property:'left', start:-2800,end:0, pin:true });
						scrolldeck.controller.animate(anim, { delay: ((anim.attr('data-build')-1)*400)+3600, duration: 1700, property:'top', start:0, end:50, pin:true });
						break;
					//case 'fly-in-wait':
						//scrolldeck.controller.animate(anim, { delay: ((anim.attr('data-build')-1)*400), duration: 3000, property:'opacity', start:0, pin:true });
						//scrolldeck.controller.animate(anim, { delay: ((anim.attr('data-build')-1)*400)+1000, duration: 1700, property:'top', start:0, end:50, pin:true });
						//break;
					default:
						scrolldeck.controller.animate(anim, { delay: (anim.attr('data-build')-1)*400, duration: 400, property:'opacity', start:0, pin:true });
				}
			}
			
			// set slide and animation scrollpoints
			scrollpoints = scrolldeck.controller.getScrollpoints();
			
			// if nav buttons, create array of section header slide indexes
			for (i=0; i<buttons.length;i++)
				sections.push(slides.index($($(buttons[i]).attr('href'))));
			
			// event handler for updating current slide index and current nav button
			scrolldeck.controller.onBlockChange(function() {
				// get slide index
				currIndex = scrolldeck.controller.blockIndex;
				
				// then update nav
				updateNav();
			});
			
			// Nav button click event
			buttons.on('click', function(e) {
				e.preventDefault();
				var slide = $($(this).attr('href'));
				currIndex = slide.index();
				scrollToSlide(slide);
			});
			
			// Keyboard events
			$(document).on('keydown', function(e){
				// up/left arrow = scroll up
				if ((e.keyCode == 37 || e.keyCode == 38) && currIndex !== 0) {
					scrollToSlide(getPrevScrollpoint());
				}
				// down/right arrow, space = scroll down
				else if ((e.keyCode == 39 || e.keyCode == 32 || e.keyCode == 40) && currIndex != slides.length-1) {
					scrollToSlide(getNextScrollpoint());
				}
			});
			
			// if slides are images, assign height to auto for proportional scaling
			for (i=0; i<slides.length; i++) {
				var el = slides.eq(i);
				if (el.prop('tagName').toUpperCase() === 'IMG') {
					el.css('height','auto');
				}
			}
			
			// if last slide is shorter than height of window, increase height
			var lastSlide = slides.eq(slides.length-1);
			if (lastSlide.outerHeight() < $(window).height()) {
				lastSlide.height(lastSlide.height()+$(window).height()-lastSlide.outerHeight());
			}
			
			updateNav();
		};
		
		
		
		// PRIVATE FUNCTIONS
		
		function updateNav() {
			if (buttons) {
				buttons.removeClass('current');
				var currSection = -1;
				for (i=0; i<sections.length;i++) {
					if (currIndex >= sections[i]) {
						currSection = i;
					}
				}
				if (currSection != -1) {
					buttons.eq(currSection).addClass('current');
				}
			}
		}
		
		function scrollToSlide(slide) {
			$(window)._scrollable().stop();
			$(window).scrollTo(slide, {
				duration: scrolldeck.settings.duration,
				easing: scrolldeck.settings.easing,
				offset: scrolldeck.settings.offset
			});
		}
		
		function getNextScrollpoint() {
			return getScrollpoint(2);
		}
		
		function getPrevScrollpoint() {
			return getScrollpoint(-1);
		}
		
		function getScrollpoint(n) {
			var scrollTop = $(window).scrollTop();
			// make temp dup scrollpoints array
			var points = scrollpoints.slice(0);
			// add current scroll position to new temp array
			points.push(scrollTop);
			// do sort to find nearest scrollpoint
			points.sort(function(a,b){return a - b;});
			return points[points.indexOf(scrollTop)+n];
		}
		
		
		// INIT
		init();
    };
     
})(jQuery);