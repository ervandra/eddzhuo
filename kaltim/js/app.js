jQvan = jQuery.noConflict();
jQvan(document).ready(function ($) {
  $(document).foundation();

  // hide livechat
  $(document).click(function (event) {
    if (!$(event.target).closest('#livechat-tag').length) {
      if ($('#livechat-tag').hasClass('open')) {
        $('#livechat-tag').removeClass('open');
      }
    }
  });

  //var jackpot = '111,069,598.75';

  var count = 111069595;
  var count2 = 312069531;
  var no = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var no2 = count2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  setInterval(function () {
    count = count + Math.floor(Math.random() * 10 + 3);
    count2 = count2 + Math.floor(Math.random() * 10 + 5);
    no = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    no2 = count2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $('#jackpot-poker').text(no);
    $('#jackpot-poker2').text(no2);
  }, Math.floor((Math.random() * 100) + 100))
})
