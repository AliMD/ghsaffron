;(function($,undefined){
  var prefix= ($.browser.webkit)  ? '-webkit-' :
        ($.browser.mozilla) ? '-moz-' : 
        ($.browser.msie)    ? '-ms-' :
        ($.browser.opera)   ? '-o-' : '',

    menu = {"#aboutus":2400,"#aboutsaffron":5270,"#products":11290,"#certificates":14201,"#laboratory":16966,"#contactus":21062};
  
  $(".logo-intro").css(prefix+'transform','scale(1.4)'); // scale logo for intro
  
  $("div.language").css('top',(window.innerHeight-450)+'px');

  var rand = function(a,b){
    if(b===undefined){
      b=a;
      a=0;
    }
    return Math.floor(Math.random()*(b-a+1))+a;
  },
  startPanel = function (){
    var dly = 1;
    $('section.flags a').each(function(){
      $(this).delay(dly).animate({'opacity':'0'},300);
      dly+=100;
    });
    $('section.flags a.active').stop(true,true).delay(500).animate({'opacity':'0'},800);
    setTimeout(function(){
      $('section.flags').css('display','none');
      continuePanel();
    },1100);
  },
  continuePanel = function(){
    $.scrollTo(0,1);

    $('div.full-bg').animate({'height':'190px'},800);

    setTimeout(function(){
      //$('div.full-bg').animate({'height':'190'},400);
      $('.language').animate({'top':'80px'},400);
      //$(".logo-intro").removeClass("biglogo").addClass("smalllogo"); // scale(.7)
      $(".logo-intro").css(prefix+'transform','scale(0.7)');
    },400);

    setTimeout(function(){
      $('nav menu').animate({'top':'17px'},400);
    },800);

    setTimeout(function(){
      $.scrollTo(menu["#aboutus"],300);
    },900);

  },
  endPanel = function (){
    /*
    if(currentMenu!="#aboutus"){
      scrollTopage("#aboutus");
      return;
    }
    */

    $.scrollTo(0,200);
    setTimeout(function(){
      $('nav menu').animate({'top':'-117px'},400);
      setTimeout(function(){
        $('div.full-bg').animate({'height':'825px'},800);
        $('.language').animate({'top':(window.innerHeight-450)+'px'},400);
        $(".logo-intro").css(prefix+'transform',"scale(1.4)");
        setTimeout(function(){
          $('section.flags').css('display','block');
          $('section.flags a').css('opacity',0).each(function(){
            $(this).delay(rand(1,300)).animate({'opacity':'1'},300);
          });
          $('section.flags a.active').stop(true,true).animate({'opacity':'1'},300);
        },700); // 800-100
      },300); // 400-100
    },200); // scroll time
  };

  var currentMenu = "#aboutus",
  nextMenu = function(c) { //return the next menu from c
    var flag = false;
    for(var i in menu) {
      if(flag) break;
      if(i===c) flag = true;
    }
    return i;
  },
  previousMenu = function(c) { //return the previous menu from c
    var prev = "";
    for(var i in menu) {
      if(i===c) break;
      prev = i;
    }
    return prev;
  };

  var pages = $('.pages'),
  deck = new $.scrolldeck({
    buttons: null,
    slides: pages
  });
  pages.prepend('<div class="spacer"></div>');


  var scrollTopage = function(linkTo){
    currentMenu = linkTo;
    if(!menu[linkTo]) return;
    $.scrollTo( menu[linkTo], 1500, 'easeOutExpo');
  };

  $("nav menu a,div.page-link > a").click(function(){
    var link = $(this).attr("href");
    scrollTopage(link);
    slider(0);
    return false;
  });

  var sleep = function(n){
    for(var i=Date.now(); Date.now()-i<n; );
  };

  var updateScrollPos = function(){
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
  };

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

    if(n===0){
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
    },700,'easeOutBack');

    currentslide = n;
  };

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
  $('.back-product').click(function(){
    slider(0);
  });


  // sub product slider
  var prdSlides = $("div.prd-casetrain div.prd-train > div"), //3
    prdCurrentslide = 0,
    prdNextBtn = $('div.prd-next'),
    prdPrevBtn = $('div.prd-prev');
  var subSlider = function(n){
    if(n>2) n=0;
    if(n<0) n=2;
    $("div.prd-casetrain div.prd-train").animate({
      'left': -(n*330) + 'px'
    },400);
    prdCurrentslide = n;
  };
  prdNextBtn.click(function(){
    subSlider(prdCurrentslide+1);
  });
  prdPrevBtn.click(function(){
    subSlider(prdCurrentslide-1);
  });

  /*
   * SCROLLING FUN START HERE!!!
   */

  var lastTrick = Date.now(),
  smoothScroll = function (e) { //param e as event
    if(Date.now()-lastTrick<500){
      lastTrick = Date.now();
      return false;
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
  };

  if(window.addEventListener) document.addEventListener('DOMMouseScroll', smoothScroll, false);
  //document.onmousewheel = smoothScroll;
  window.menu=menu;
  window.startPanel=startPanel;
  window.updateScrollPos=updateScrollPos;

})(jQuery);
