(function($,undefined){
	$(function(){
		var scrollorama = $.scrollorama({ blocks:'.pages' });
		scrollorama.onBlockChange(function() {
			var i = scrollorama.blockIndex;
			console.log("blockIndex: "+i);
		});

		scrollorama.animate('.certificates-container h2',{
			delay: 100, 
			duration: 300, 
			property:'opacity', 
			start:0,
			end:1
		});
	})
})(jQuery);




		//scrollorama.animate('#fade-in',{ delay: 400, duration: 300, property:'opacity', start:0 })

		/*scrollorama.animate('.about-container div.about-img',{
			duration: 200,
			property:'font-size',
			end:20
		});

		scrollorama.animate('.certificates-container h2',{
			delay: 200, 
			duration: 700, 
			property:'opacity', 
			start:0,
			end:1,
			easing:'easeOutBounce'
		});

		scrollorama.animate('.about-container p',{
			duration: 200,
			property:'font-size',
			end:20
		});

	
		scrollorama.animate('.prd-title',{
			duration: 100,
			property:'font-size',
			start:10,
			end:70
		});
*/
		
/*
		scrollorama.animate('prd-det1 p',{
			duration: 400,
			property:'padding-top',
			start:400,
			pin:true
		});*/
/*
		scrollorama.animate('#page2 h1',{
			delay:300,
			duration: 200,
			property:'font-size',
			start:10,
			end:35
		});

		scrollorama.animate('#page3 p',{
			duration: 400,
			property:'padding-top',
			start:400,
			pin:true
		});

		scrollorama.animate('#page4 #px1',{
			delay:600,
			duration: 200,
			property:'top',
			start:0,
			end:-100
		});

		scrollorama.animate('#page4 #px2',{
			delay:500,
			duration: 300,
			property:'top',
			start:0,
			end:-200
		});

		scrollorama.animate('#page4 #px3',{
			delay:400,
			duration: 400,
			property:'top',
			start:50,
			end:-250
		});

		scrollorama.animate('#page5 p',{
			delay:500,
			duration:500,
			property: 'top',
			end:400,
			easing:'easeOutBounce'
		});

		scrollorama.animate('#page6 h1',{
			delay:300,
			duration:300,
			property: 'top',
			end:300
		});
		*/