var jQvan = jQuery.noConflict();
jQvan(document).ready(function ($) {
  $('body').addClass('ready');
  $(document).foundation();
  $('#slider').nivoSlider({

  });
})