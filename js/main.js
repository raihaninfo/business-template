// slider-content
// slider-img

$(document).ready(function(){
    // $('.your-class').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 2
    //     asNavFor : '.slider-content'
    // });




    // $('.slider-content').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 2;
    //     asNavFor : '.your-class'
    // });

      $('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.your-class',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

 $('.your-class').slick({
    slidesToShow: 2,
    slidesToScroll: 3,
    arrows: false,
    fade: true,
    asNavFor: '.slider-content'
  });



  });
          
              
// $('.slider-img').slick({
//     infinite: false,
//     slidesToShow: 3,
//     slidesToScroll: 1
//     autoplay: true,
//     fade: true;
//     arrws: false;
//   });
              

