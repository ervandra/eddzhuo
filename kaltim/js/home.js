jQhome = jQuery.noConflict();
jQhome(document).ready(function ($) {
  $('#slider').slick({
    autoplay: true,
    prevArrow: '<button class="slick-nav slick-prev"><span class="fa fa-angle-left"></span></button>',
    nextArrow: '<button class="slick-nav slick-next"><span class="fa fa-angle-right"></span></button>'
  });
});
