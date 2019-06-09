'use strict';

var jQslots = jQuery.noConflict();
jQslots(document).ready(function ($) {
  $('body').addClass('slot');
  var $isotope = $('.slot-isotope').isotope({
    percentPosition: true,
    itemSelector: '.grid-item'
  });

  $('.filter-platform').on('click', 'li > a', function (e) {
    e.preventDefault();
    // $(this).preventDefault();
    var filterValue = $(this).attr('data-filter');
    $isotope.isotope({ filter: filterValue });
    $('.filter-platform li').removeClass('active');
    $(this).parent().addClass('active');
  });
});