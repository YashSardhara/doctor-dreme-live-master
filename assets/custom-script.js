$(document).ready(function(){
   $('.accord1 li p').click(function(){
    $(this).next(".accord-content").slideToggle();
      $(this).closest("li").siblings().find('.accord-content').slideUp();
  });

  // Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

  $(".search--bar .test input.boost-pfs-search-box").attr("placeholder", "What are you looking for");  

  $('.home-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('#more-details').click(function(){
      $('.emi-chart').show();
    });
    $('.emi-chart span.action_button').click(function(){
      $('.emi-chart').hide(); 
    });

    $('#blog-slider').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     adaptiveHeight: true,
     infinite: true,
     arrows: true,
     responsive: [
       {
         breakpoint: 768,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 2,
           slidesToScroll: 1,
         }
       },
       {
         breakpoint: 480,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       }
     ]
   });
  
   $('.home-slider2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
     
      fade: false,
      adaptiveHeight: true,
      useTransform: true,
      speed: 400,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
   });
/****** home slider****/
  
   $('.home-slider2-nav').on('init', function(event, slick) {
          $('.home-slider2-nav .slick-slide.slick-current').addClass('is-active');
      }).slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false,
          focusOnSelect: false,
          infinite: false,
          nav:false,
     	arrow:false,
          responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
              }
          }, {
              breakpoint: 640,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
          }, {
              breakpoint: 420,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
          }
          }]
      });

   $('.home-slider2').on('afterChange', function(event, slick, currentSlide) {
      $('.home-slider2-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.home-slider2-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.home-slider2-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
   });

   $('.home-slider2-nav').on('click', '.slick-slide', function(event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');

      $('.home-slider2').slick('slickGoTo', goToSingleSlide);
   });
  /***account***/
   
  $(".ul.sideber").click(function () {
        if(!$(this).hasClass('active'))
        {
            $(".li.active").removeClass("active");
            $(this).addClass("active");        
        }
    });
  
   $('.slider-offer').slick({
     breakpoint: 600,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      adaptiveHeight: true,
      infinite: false,
      useTransform: true,
      speed: 400,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
   });
 
  
   $('.slider-custom').slick({
      slidesToShow: 3,
     slidesToScroll: 1,
     adaptiveHeight: true,
     infinite: true,
     arrows: true,
     responsive: [
       {
         breakpoint: 768,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
         }
       }
     ]
   });
  
  $('#product_re1').slick({
      slidesToShow: 2,
     slidesToScroll: 1,
     adaptiveHeight: true,
     infinite: true,
     arrows: true,
     responsive: [
       {
         breakpoint: 768,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
         }
       }
     ]
   });
  

  $("#copyUsingJquery").click(function() {
    copyUsingJquery("#copyTarget");
  });
 

  function copyUsingJquery(element_id) {
    $('#copyTarget').attr("contenteditable", true)
      .select()
      .on("focus", function() {
        document.execCommand('selectAll', false, null)
      })
      .focus()
    document.execCommand("Copy");
    $('#copyTarget').removeAttr("contenteditable");
     //alert("Copy Promo Code");
  }

   $("button.shopify-payment-button__button").text('Buy Now');
});



$(document).ready(function(){
var mac=0;
  if(navigator.userAgent.indexOf('Mac') > 0){ //alert(navigator.userAgent.indexOf('Mac'))
        mac=1;
    }else{
        mac=0;
    }

if(1==mac){
    //document.body.className+='mac-os';
    //document.getElementsByTagName('body')[0].className+='mac-os';
  $("body").addClass("mac-os"); 
}else{
    //document.body.className+='win-os';
    //document.getElementsByTagName('body').className+='win-os';
    //$('body').addClass('mac-os');
    //$("body.className").addClass('win-os');
    //document.body.className += " " + 'win-os';
    $("body").addClass('win-os');
}
});
      


  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $(".header--root").addClass("sticky");
    }else{
      $(".header--root").removeClass("sticky");
    }//if-else
  });//win func.


$(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $(".fixed-mobile-bottom-bar").addClass("sticky-mobile");
    }else{
      $(".fixed-mobile-bottom-bar").removeClass("sticky-mobile");
    }//if-else
  });//win func.


$(document).ready(function(){
    //alert("Test ");
    $(".product-buy-buttons--cta.add-to-cart").click(function(e){
      $(".template--product.win-os.jdgm-buyer-badge--removed").addClass("product_aic");
      e.stopPropagation();
    });

    $(".close_icon").click(function(e){
      $(".template--product.win-os.jdgm-buyer-badge--removed").removeClass("product_aic");
      e.stopPropagation();
    });
     
  });

  $(".product_aic").click(function(e){
    e.stopPropagation();
  });

  $(document).click(function(e){
    $(".template--product.win-os.jdgm-buyer-badge--removed").removeClass("product_aic");
    e.stopPropagation();
  });