jQhome = jQuery.noConflict();
jQhome(document).ready(function($){
  $('.main-slideshow').slick({
    autoplay: true,
    dots: true,
    prevArrow: '<button class="slick-nav slick-prev"><span class="fa fa-angle-left"></span></button>',
    nextArrow: '<button class="slick-nav slick-next"><span class="fa fa-angle-right"></span></button>'
  });
  $('.running-banner').slick({
    autoplay:true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: true,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    buttons:false,
    variableWidth: true,
    infinite: true,
    arrows: false
  });
});
