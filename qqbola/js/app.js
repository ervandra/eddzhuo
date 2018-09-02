jQvan = jQuery.noConflict();
jQvan(document).ready(function($){
  $(document).foundation();

  $('.main-slider').slick({
    prevArrow: '<button class="slick-nav slick-prev"><span class="fa fa-angle-left"></span></button>',
    nextArrow: '<button class="slick-nav slick-next"><span class="fa fa-angle-right"></span></button>',
    autoplay:true
  });
  $('.right-slider').slick({
    arrows:false,
    autoplay:true
  });

  // // hide livechat
  // $(document).click(function(event) { 
  //   if(!$(event.target).closest('#livechat-tag').length) {
  //       if($('#livechat-tag').hasClass('open')) {
  //           $('#livechat-tag').removeClass('open');
  //       }
  //   }        
  // });

  // //var jackpot = '111,069,598.75';

  // var count = 111069595.89;
  // var no = count.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
  // setInterval(function(){
  //   count = count + 0.01;
  //   no = count.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
  //   $('#progressive_jackpot').text('$'+no);
  // }, Math.floor((Math.random() * 10) + 100 ))
})
