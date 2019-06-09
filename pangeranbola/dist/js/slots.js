'use strict';

var jQslots = jQuery.noConflict();
jQslots(document).ready(function ($) {
  $('body').addClass('slot');
  var $isotope = $('.slot-isotope').isotope({
    percentPosition: true,
    itemSelector: '.grid-item'
  });

  $('.filter-tipe').on('click', 'li', function (e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $isotope.isotope({ filter: filterValue });
    $('.filter-tipe li').removeClass('active');
    $(this).addClass('active');
  });
});