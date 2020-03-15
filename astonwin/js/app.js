jQvan = jQuery.noConflict();
jQvan(document).ready(function($){
  $(document).foundation();

  // hide livechat
  $(document).click(function(event) {
    if(!$(event.target).closest('#footer-contact').length) {
        if($('#footer-contact').hasClass('open')) {
            $('#footer-contact').removeClass('open');
        }
    }
  });

  $('.main-slideshow').slick({
    autoplay: true,
    dots: true,
    prevArrow: '<button class="slick-nav slick-prev"><span class="fa fa-angle-left"></span></button>',
    nextArrow: '<button class="slick-nav slick-next"><span class="fa fa-angle-right"></span></button>'
  });
})
