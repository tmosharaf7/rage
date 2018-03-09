$(document).ready(function(){
  $(".featured_works_all").owlCarousel({
    loop: true,
    margin: 5,
    items: 5,
    center: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
  });
  $(".testimonials_all").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    center: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false
  });
  $(".slider_area").owlCarousel({
    items: 1,
    loop: true
  });
});

$(document).ready(function(){
  $('.featured_popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
  $('.portfolio_popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
});

$(document).ready(function(){
  $('.single_count h3').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});

$(function(){
		$('#slick_menu').slicknav();
	});