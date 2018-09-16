jQvan = jQuery.noConflict();
jQvan(document).ready(function($){
  $(document).foundation();
  $('.slideshow').slick({
    fade: true,
    autoplay: true
  });
})