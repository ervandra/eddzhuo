jQvan = jQuery.noConflict();
jQvan(document).ready(function($){
  $(document).foundation();
  $('#home-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
})
