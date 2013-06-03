;(function($,undefined){
  var prefix= ($.browser.webkit)  ? '-webkit-' :
        ($.browser.mozilla) ? '-moz-' : 
        ($.browser.msie)    ? '-ms-' :
        ($.browser.opera)   ? '-o-' : '',

    menu = {"#aboutus":3600,"#aboutsaffron":7530,"#products":11620,"#certificates":14421,"#laboratory":17186,"#contactus":19375};
  
  $(".logo-intro").css(prefix+'transform','scale(1.4)'); // scale logo for intro
  
  $("div.language").css('top',(window.innerHeight-450)+'px');

  // ColorBox
  $(".port_group").colorbox({
    rel:'port_group',
    transition:"fade",
    scrolling:false,
    returnFocus:false,
    maxHeight:window.innerHeight-50,
    maxWidth:window.innerWidth-50
  });

  // for Home Key event
  document.onkeydown = function(e) {
    e = e || window.event;
    if(e.keyCode == 36) $.scrollTo(menu["#aboutus"],300);
  };

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
  var 
    prdTrain1 = $('div.prd-casetrain div.prd-train1'),
    prdTrain2 = $('div.prd-casetrain div.prd-train2'),
    prdSlides1 = $("div.prd-casetrain div.prd-train1 > div"),
    prdSlides2 = $("div.prd-casetrain div.prd-train2 > div"),
    prdCurrentslide1 = 0,
    prdCurrentslide2 = 0,
    prdNextBtn = $('div.prd-next'),
    prdPrevBtn = $('div.prd-prev'),
    autoPlayIv = false;
  go2slide = function(n,elm,len){
    if(n>(len.length-1)) n = 0; //prdSlides.length-1
    if(n<0) n = (len.length-1);
    elm.animate({
      'left': -(n*330) + 'px'
    },400);
    curslide=n;
    if(elm == prdTrain1) prdCurrentslide1 = n;
    else if(elm == prdTrain2) prdCurrentslide2 = n;
  };
  prdNextBtn.click(nextSlide = function(){
    go2slide(prdCurrentslide1+1,prdTrain1,prdSlides1);
    go2slide(prdCurrentslide2+1,prdTrain2,prdSlides2);
  });
  prdPrevBtn.click(function(){
    go2slide(prdCurrentslide1-1,prdTrain1,prdSlides1);
    go2slide(prdCurrentslide2-1,prdTrain2,prdSlides2);
  });
  (autoPlayStart = function(){
    if(autoPlayIv) return;
    autoPlayIv = setInterval(nextSlide, 2000);
  })();
  autoPlayStop = function(){
    clearInterval(autoPlayIv);
    autoPlayIv = false;
  };
  $('div.prd-slider').mouseover(autoPlayStop);
  $('div.prd-slider').mouseout(autoPlayStart);

  //certificates slider
  var trainCert = $('section.background_holder'),
    listsCert = $('section.thumb_holder div')
    currentSlideCert = 0,
    autoPlayCert = false;

  certSlide = function(n){
    if(n>listsCert.length-1) n=0;
    if(n<0) n = listsCert.length-1;
    trainCert.stop().animate({
      left:-321*n
    },500);
    listsCert.eq(currentSlideCert).removeClass('active');
    listsCert.eq(n).addClass('active');
    currentSlideCert=n;
  }

  listsCert.click(function(){
    certSlide($(this).index());
  });

  $('div.cert-right div.next-cert').click(nextSlideCert = function(){
    certSlide(currentSlideCert+1);
  });

  $('div.cert-right div.pre-cert').click(function(){
    certSlide(currentSlideCert-1);
  });

  (autoPlayStartCert = function(){
    if(autoPlayCert) return ;
    autoPlayCert = setInterval(nextSlideCert, 5000);
  })();

  autoPlayStopCert = function(){
    clearInterval(autoPlayCert);
    autoPlayCert = false;
  }

  $('div.cert-right').mouseover(autoPlayStopCert);
  $('div.cert-right').mouseout(autoPlayStartCert);


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


  // Contact Form Validators
  var emailPattern = /^[a-z0-9+_%.-]+@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i,
    tellPattern = /^[0-9)(\s+-]{11,20}$/i,
    validateText = function (str,len){
      return str.length >= len;
    },
    validateEmail = function (str){
      return emailPattern.test(str);
    },
    validateTell = function (str){
      return tellPattern.test(str);
    };

  // Contact form
  $('#contact-form').submit(function(){
    var target=$('#name'), err = false;

    target = $('#name');
    if( validateText(target.val(),3) ){
      target.removeClass('err').addClass('ok');
    }else{
      target.removeClass('ok').addClass('err');
      err = true;
    }

    // target = $('#subject');
    // if( validateText(target.val(),5) ){
    //   target.removeClass('err').addClass('ok');
    // }else{
    //   target.removeClass('ok').addClass('err');
    //   err = true;
    // }

    // target = $('#tell');
    // if( validateTell(target.val()) ){
    //   target.removeClass('err').addClass('ok');
    // }else{
    //   target.removeClass('ok').addClass('err');
    //   err = true;
    // }

    target = $('#mail');
    if( validateEmail(target.val()) ){
      target.removeClass('err').addClass('ok');
    }else{
      target.removeClass('ok').addClass('err');
      err = true;
    }

    target = $('#msg');
    if( validateText(target.val(),3) ){
      target.removeClass('err').addClass('ok');
    }else{
      target.removeClass('ok').addClass('err');
      err = true;
    }

    if(!err){
      $('#ifrm').animate({
        height:'70px'
      },700);
    }

    return !err;
  });

  //Piwik Analytic
  var _paq = _paq || [];
  _paq.push(["setCookieDomain", "ghsaffron.com"]);
  _paq.push(["setDomains", ["*.ghasemsaffron.com","*.ghasemsaffron.ir","*.ghsaffron.ir","*.naserisaffron.com","*.naserisaffron.ir"]]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);

  (function() {
    var u="http://a.1dws.com/";
    _paq.push(["setTrackerUrl", u+"piwik.php"]);
    _paq.push(["setSiteId", "26"]);
    var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
    g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
  })();



  if(window.addEventListener) document.addEventListener('DOMMouseScroll', smoothScroll, false);
  //document.onmousewheel = smoothScroll;
  window.menu=menu;
  window.startPanel=startPanel;
  window.updateScrollPos=updateScrollPos;

})(jQuery);
