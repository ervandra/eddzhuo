jQvan = jQuery.noConflict();
jQvan(document).ready(function($){
  $(document).foundation();
  $('.slideshow').slick({
    fade: true,
    autoplay: true
  });

  var count = 111069595;
  var count2 = 312069531;
  var no = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var no2 = count2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  setInterval(function(){
    count = count + Math.floor(Math.random() * 10 + 3);
    count2 = count2 + Math.floor(Math.random() * 10 + 5);
    no = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    no2 = count2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('#jackpot-poker').text('$'+no);
    $('#jackpot-domino').text('$'+no2);
  }, Math.floor((Math.random() * 100) + 100 ))

})