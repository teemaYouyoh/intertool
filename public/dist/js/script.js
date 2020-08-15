
"use strict";
$(function() {
  $(".youtube-video").each(function() {
// Based on the YouTube ID, we can easily find the thumbnail image
$(this).css({'background-image': 'url(https://img.youtube.com/vi/' + this.id + '/0.jpg)'});

// Overlay the Play icon to make it look like a video player
$(this).append($('<div/>', {'class': 'play'}));

$(document).delegate('#'+this.id, 'click', function() {
// Create an iFrame with autoplay set to true
var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=0&autohide=1";
if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

// The height and width of the iFrame should be the same as parent
var iframe = $('<iframe/>', {'frameborder': '0','allowfullscreen': 'allowfullscreen', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

// Replace the YouTube thumbnail with YouTube HTML5 Player
$(this).replaceWith(iframe);





$('.close-video').click(function(){
  $('#about-form iframe').attr({'src': iframe_url});
});


});
});
});






















$("a.popup").click(function(){
  return false;
});















$(document).ready(function(){
  $('.close').click(function(){
    $(this).parent().removeClass('active');
    $(this).parents('.mobile-filter-side').animate({'right': '-100%'});
    $(this).parents('.white_mob').animate({'left': '-100%'});
    $('body').removeClass('menu_active');
  });
});
$(document).ready(function(){
  $('.mobile-menu-btn').click(function(){
    $('.mobile-menu').addClass('active');
    $('body').addClass('menu_active');
  });
});
$(document).ready(function(){
  $('.expanded_click').click(function(){
    $(this).toggleClass('active')
    $(this).find('.dropdown').toggleClass('active')
    $(this).next('.dropdown').toggleClass('active')
  });
});
$(document).ready(function(){
  $('.cause').click(function(){
    $('.mobile-filter-side').css({'right': '0'});
    $('body').addClass('menu_active');
  });
});
// $(document).ready(function(){
//   $('.menu-mlide-1').click(function(){
//     $('.white_mob').animate({'left': '0'});
//   });
// });
$(document).ready(function(){
  $('.expanded').click(function(){
    $(this).children('.dropdown_sidebar_menu').toggleClass('active');
    $(this).next('.dropdown_sidebar_menu').toggleClass('active');
  });
});


$(document).ready(function(){
  $('.colorbox_cart_btn').click(function(){
    $('.cart-popup').toggleClass('active');
    $(this).toggleClass('active');
  });
});
$(document).ready(function(){
  $('.cart-popup .wrap .head-cart .head .close').click(function(){
    $('.cart-popup').toggleClass('active');
    $(this).toggleClass('active');
  });
});





$(document).ready(function(){
  $('a.popup-1').on("click",function(){
    $('.popup-form-1').fadeIn();
  });
});


$(document).ready(function(){
  $('a.popup-2').on("click",function(){
    $('.popup-form-2').fadeIn();
  });
});


$(document).ready(function(){
  $('a.popup-3').on("click",function(){
    $('.popup-form-3').fadeIn();
  });
});


$(document).ready(function(){
  $('a.popup-4').on("click",function(){
    $('.popup-form-4').fadeIn();
  });
});

$(document).ready(function(){
  $('a.popup-6').on("click",function(){
    $('.popup-form-6').fadeIn();
  });
});
// $(document).ready(function(){
//   $('.about-video').on("click",function(){
//     $('.popup-form-5').fadeIn();
//   });
// });


$('.close').click(function(){
  $('.popup-form').fadeOut();
});





// $('#form_order_delivery input[type="radio"]').click(function(){
//     if ($(this).is(':checked')) {
//         $(this).parent('.posiotion').find('.form_np').fadeIn();
//     } 
//     else if ($(this).is(':not:checked')) {
//        $(this).parent('.posiotion').find('.form_np').fadeOut();
     
//     };
// });







$(document).ready(function() {
  $('.title-accordion.first').addClass('active');
  $('.accordion .title-accordion').on('click', f_acc);
});

function f_acc(){
  $(this).next().slideToggle();
  $(this).toggleClass('active');
}
// $(document).ready(function(){
//   $('.title-more').click(function(){
//     $(this).toggleClass('active');
//     $(this).next().toggleClass('active');
//   });
// });










$(document).ready(function(){
  var slider = $('#slide-home .field-content ul').slick({
    centerMode: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 800,
    slidesToShow: 1,
    speed: 800,
    dots: true,
    responsive: true,
    fade: true,
    prevArrow: '.arrow .prev',
    nextArrow: '.arrow .next'
  });
});
$(document).ready(function(){
  var slider = $('.slide-not-vertical .slide').slick({
    centerMode: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 800,
    slidesToShow: 1,
    asNavFor: '.slide-vertical .slide',
    speed: 800,
    dots: true,
    responsive: true,
    fade: true,
    prevArrow: '.arrow .prev',
    nextArrow: '.arrow .next'
  });
});

$(function(){
  $('.slide-vertical .slide').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    autoplay: false,
    arrows: true,
    asNavFor: '.slide-not-vertical .slide',
    focusOnSelect: true
  });
});











$(document).ready(function(){
  var slider = $('.slide-catalog-1 .field-content').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    speed: 200,
    responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
  })

  slider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});

});




$(document).ready(function(){
  var slider = $('.slide-catalog-2 .field-content').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    speed: 200,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
  })

   slider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});
});




$(document).ready(function(){
  var slider = $('#view-catalog.comparison.desk .field-content').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    infinite: false,
    speed: 200,
    responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 371,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
  })



});
$(document).ready(function(){
  var slider = $('#view-catalog.comparison.mobile .field-content').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    speed: 200
  })
});


$(document).ready(function(){
  var slider = $('#blog-sections .field-content ').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    speed: 200,
    prevArrow: '.arrow .prev',
    nextArrow: '.arrow .next',
    responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
  })

  slider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});

});


















  $(document).ready(function(){
  var $frame = $('#slider-gray .wrap');
  var $wrap  = $frame.parent();

// Call Sly on frame
$frame.sly({
  horizontal: 1,
  itemNav: 'basic',
  smart: 1,
  activateOn: 'click',
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: 0,
  scrollBar: $wrap.find('.c-scrollbar'),
  scrollBy: 1,
  speed: 1000,
  elasticBounds: 1,
  dragHandle: 1,
  dynamicHandle: 1,
  clickBar: 1,

// Cycling
cycleBy: 'items',
cycleInterval: 2000,
pauseOnHover: 1,

// Buttons
prev: $wrap.find('.prev'),
next: $wrap.find('.next')
});

});



 




$('#tabs #tabs-1,#tabs_2 #tabs-1').addClass('showscale');

$(document).ready(function($) {
    $('#tabs').tabulous({
      effect: 'scale'
    });
});

$(document).ready(function($) {
    $('#tabs_2').tabulous({
      effect: 'scale'
    });
});


//filter-prie
$(function () {
  $("#filter__range").slider({
    min: 0,
    max: 20000,
    values: [5000,15000],
    range: true,
    stop: function(event, ui) {
      $("input#priceMin").val($("#filter__range").slider("values",0));
      $("input#priceMax").val($("#filter__range").slider("values",1));

      $('.price-range-min.value').html($("#filter__range").slider("values",0));
      $('.price-range-max.value').html($("#filter__range").slider("values",1));
    },
    slide: function(event, ui){
      $("input#priceMin").val($("#filter__range").slider("values",0));
      $("input#priceMax").val($("#filter__range").slider("values",1));

      $('.price-range-min.value').html($("#filter__range").slider("values",0));
      $('.price-range-max.value').html($("#filter__range").slider("values",1));
    }
  });

  $("input#priceMin").on('change', function(){
    var value1=$("input#priceMin").val();
    var value2=$("input#priceMax").val();
    if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#priceMin").val(value1);
      $('.price-range-min.value').html(value1);
    }
    $("#filter__range").slider("values", 0, value1);
    $('.price-range-min.value').html(value1);
  });

  $("input#priceMax").on('change', function(){
    var value1=$("input#priceMin").val();
    var value2=$("input#priceMax").val();
    if (value2 > 20000) { value2 = 20000; $("input#priceMax").val(35000)}
    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#priceMax").val(value2);
      $('.price-range-max.value').html(value2);
    }
    $("#filter__range").slider("values",1,value2);
    $('.price-range-max.value').html(value2);
  });

// $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
// $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1 ) + '</span>');
});



$("a.colorbox_images").colorbox({
  maxHeight: '90%',
  maxWidth: '90%'
});

$("a.colorbox[rel='gallery1']").colorbox({});

$("a.colorbox.inline").colorbox({
  maxWidth: '70%',
  maxHeight: '90%',
  inline: true
});

$("a.colorbox_map").colorbox({
  iframe: true,
  width: '90%',
  height: '70%'
});

$("a.colorbox_video").colorbox({
  iframe: true,
  width: '80%',
  height: '80%'
});












// $("a.colorbox_cart").colorbox({
//   iframe: true,
//   width: '80%',
//   height: '500px',
//   scrolling: false
// });




  $(document).ready(function(){
    $('#bottom-info .field-content .field-text ').jScrollPane();
  })







var isMobile = false;
// проверка на размер экрана (размер я брал вроде с Bootstrap-а)
$(document).ready( function() {
  if ($('body').width() <= 980) {
    isMobile = true;
  }
// и потом если нужен код только для телефона:
if (isMobile) {



  $(".menu-path-node-73 > a").click(function(){
    return false;
  });


  $(document).ready(sizeContent);
  $(window).resize(sizeContent);


  function sizeContent() {
    var newWidth = $(window).width();
    var newHeight = $(window).height();
    $(".menu-2").css("width", newWidth - 200);
    $("#block-cart .dropdown.dropdown-cart .product").css("height", newHeight - 114);
  }

// Слайдер каталог продукции - Главная - mob
$(document).ready(function(){
  var slider = $('#catalog-categories .field-content').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    speed: 200,
    responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
  })

  slider.mousewheel(function(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});

});



$("#view-catalog .option a").click(function(){
  return false;
});


$("a.colorbox_map").colorbox({
  iframe: true,
  width: '90%',
  height: '50%'
});
$("a.colorbox.inline").colorbox({
  maxWidth: '90%',
  width: '90%',
  maxHeight: '90%',
  inline: true
});

}
// или для остальных
if (!isMobile) {

  $(document).ready(function(){
    $('#block-cart .dropdown.dropdown-cart .product').jScrollPane();
  });

  


$(document).ready(function(){
  $('.expanded').hover(function(){
    $(this).children('.dropdown').addClass('active');
     $(this).next('.dropdown').addClass('active');
  });
});


$(document).ready(function(){
  $('.expanded').mouseleave(function(){
    $(this).children('.dropdown').removeClass('active');
    $(this).next('.dropdown').removeClass('active');
  });
});






// 3 слайдера продукции
 $(document).ready(function(){
    var options = {
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      startAt: 0,
      scrollBar: ('.c-scrollbar'),
      scrollBy: 1,
      speed: 800,
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

    // Cycling
    cycleBy: 'null',
    cycleInterval: 800,
    pauseOnHover: 1,

    // Buttons
    prev: ('.controls .prev'),
    next: ('.controls .next')
    };
    $('.slide-item-1 .wrap-slide').sly(options);
});





 


  $(document).ready(function(){
  var $frame = $('.slide-item-2 .wrap-slide');
  var $wrap  = $frame.parent();

// Call Sly on frame
$frame.sly({
  horizontal: 1,
  itemNav: 'basic',
  smart: 1,
  activateOn: 'click',
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: 0,
  scrollBar: $wrap.find('.c-scrollbar'),
  scrollBy: 1,
  speed: 800,
  elasticBounds: 1,
  dragHandle: 1,
  dynamicHandle: 1,
  clickBar: 1,

// Cycling
cycleBy: 'null',
cycleInterval: 800,
pauseOnHover: 1,

// Buttons
prev: $wrap.find('.prev'),
next: $wrap.find('.next')
});

});



  $(document).ready(function(){
  var $frame = $('.slide-item-3 .wrap-slide');
  var $wrap  = $frame.parent();

// Call Sly on frame
$frame.sly({
  horizontal: 1,
  itemNav: 'centered',
  smart: 1,
  activateOn: 'click',
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: 0,
  scrollBar: $wrap.find('.c-scrollbar'),
  scrollBy: 1,
  speed: 800,
  elasticBounds: 1,
  dragHandle: 1,
  dynamicHandle: 1,
  clickBar: 1,

// Cycling
cycleBy: 'null',
cycleInterval: 800,
pauseOnHover: 1,

// Buttons
prev: $wrap.find('.prev'),
next: $wrap.find('.next')
});

});




}
} );







$('#prem .field-content').viewportChecker({
                callbackFunction: function(elem, action){
                    $('#prem .field-content .row-1 .field-text').animateNumber({ number: 2800 }, 1500);
                     $('#prem .field-content .row-2 .field-text').animateNumber({ number: 4000 }, 1500);
                      $('#prem .field-content .row-3 .field-text').animateNumber({ number: 9580000 }, 1500);
                       $('#prem .field-content .row-4 .field-text').animateNumber({ number: 874592 }, 1500);
              offset: 0  
            }
        });
$('#triptych-about .field-content').viewportChecker({
                callbackFunction: function(elem, action){
                    $('.row-1 .field-year').animateNumber({ number: 1999 }, 1500);
                    $('.row-2 .field-year').animateNumber({ number: 2001 }, 1700);
                    $('.row-3 .field-year').animateNumber({ number: 2006 }, 1800);
                    $('.row-4 .field-year').animateNumber({ number: 2010 }, 2100);
                    $('.row-5 .field-year').animateNumber({ number: 2014 }, 2300);
                    $('.row-6 .field-year').animateNumber({ number: 2019 }, 2500);
              offset: 0  
            }
        });


$(document).ready(function() {
  $('.scale-b').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated bounceInLeft',
   offset: 0
  });
});


    $(document).ready(function() {
      $(".anchor").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
      });
    });
















    setTimeout(function() {




function stickyBlock () {

  var win = $(window);
  var block = $(".your-product,.airSticky");

  var textPosition = $("#main-content").offset().top;
  var textHeight = $("#main-content").outerHeight();

  var textPositionEnd = textPosition + textHeight;
  var blockPosition = block.offset().top;
  var blockHeight = block.outerHeight();
  var endPositionBlock = textPositionEnd - blockHeight;

  win.on('scroll', function () {
     var top = win.scrollTop();
    

     if (blockPosition <= top) {
        var newTop = top - blockPosition + 143;
       
        block.css('transform', 'translateY(' + newTop + 'px)');     

     } else {
        block.css('transform', 'translateY(' + 0 + 'px)');  
        //console.log("no fixed")
     }

     if (top >= endPositionBlock) {
          block.addClass("fixed");
        } else {
          block.removeClass("fixed");
        }   
  });
}



stickyBlock();

$(window).resize(function() {
   stickyBlock();
});

$(window).resize();
  }, 4000);





$('.option.fav input[type="checkbox"]').click(function(){
    if ($(this).prop('checked')) {
        $(this).parent().find('label').addClass('active');
        $(this).parent().find('label span').html('Добавленно');
        $(this).parent().find('.tooltip_add_too ').animate({'left': '0'}, 300).delay(2000).animate({'left': '-120px'}, 300);

  

    } else {
       $(this).parent().find('label').removeClass('active');
        $(this).parent().find('label span').text('Добавить');
     
    };
});




$('.option.com input[type="checkbox"]').click(function(){
    if ($(this).prop('checked')) {
        $(this).parent().find('label').addClass('active');
        $(this).parent().find('label span').html('Добавленно');
                $(this).parent().find('.tooltip_add_too ').animate({'left': '0'}, 300).delay(2000).animate({'left': '-120px'}, 300);

  

    } else {
       $(this).parent().find('label').removeClass('active');
        $(this).parent().find('label span').text('Добавить');
     
    };
});




$(document).ready(function(){
  $('.tooltip_info_btn').click(function(){
    $(this).children('span').toggleClass('active')
    $(this).next('.tooltip').toggleClass('active')
  });
});
$(document).ready(function(){
  $('.tooltip .close').click(function(){
    $(this).parents().find('.tooltip_info_btn span').removeClass('active')
    $(this).parent().removeClass('active')
  });
});



$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 155 ) {
        $('header').addClass('fixed fadeInDown');
        $('header + div,header + main').addClass('active_top');
    }   
    if( scrolled <= 0 ) {     
        $('header').removeClass('fixed fadeInDown');
        $('header + div,header + main').removeClass('active_top');
    }
});

$(function($){
   $("#phone").mask("(999) 999-99-99");
});



$(document).ready(function(){
  $('.cnt_sidebar.more_link .expanded_click_menu .more').click(function(){
    $(this).parents().find('.dropdown_menu_click').toggleClass('active');
  });
});


    $(function(){
      $(document).click(function(event) {
        if ($(event.target).closest(".mobile-menu.active,.mobile-menu-btn").length) return;
        $(".mobile-menu.active").removeClass('active');
        event.stopPropagation();
      });
    });






  function checkParams() {
    var name = $('#name').val();
    var last_name = $('#last_name').val();
    var phone = $('#number').val();
    var email = $('#email').val();
    var city = $('#city').val();
     
    if(name.length != 0 && last_name.length != 0 && phone.length != 0 && email.length != 0 && city.length != 0 ) {
        $('.field_3 input,.field_3 select').removeAttr('disabled');
        $('.field_3').addClass('active');

    } else {
        $('.field_3 input,.field_3 select').attr('disabled', 'disabled');
          $('.field_3').removeClass('active');
    }
}

  function checkParamsCheck() {
    var id_label_1 = $('.field_3 input');
     
    if(id_label_1.prop != "checked") {
        $('.field_4 input').removeAttr('disabled');
        $('.field_4').addClass('active');

    } else {
          $('.field_4 input').attr('disabled', 'disabled');
          $('.field_4').removeClass('active');
    }
}

  function checkParamsCheck_1() {
    var id_label_1 = $('.field_4 input');
     
    if(id_label_1.prop != "checked") {
      $('.field_5 input,.field_6 textarea').removeAttr('disabled');
        $('.field_5,.field_6').addClass('active');

    } else {
        $('.field_5 input,.field_6 textarea').attr('disabled', 'disabled');
        $('.field_5,.field_6').removeClass('active');
    }
}



