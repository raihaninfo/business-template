// slider-content
// slider-img

$(document).ready(function(){

  $('.client').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    fade: true,
    asNavFor: '.client-img'
    });
    $('.client-img').slick({
    slidesToShow: 2,
    slidesToScroll: 3,
    asNavFor: '.client',
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    });


  });
          
              