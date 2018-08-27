var jQ = jQuery.noConflict();
jQ(document).ready(function($){
  // $(document).foundation();

  $('.nav-tabs li a').on('click', function(e){
    e.preventDefault();
    var $href = $(this).attr('href');
    $('.nav-tabs li').removeClass('active').removeClass('inactive');
    $('.nav-tabs li').addClass('inactive');
    $(this).parent().addClass('active');
    $('.tab-pane').removeClass('active');
    $($href).addClass('active');
  })

  $('[data-tabs-1]').find('li > a').each(function(el){
    var $href = $(this).attr('href');
    $(this).on('click', function(e){
      var $id = $('[data-tabs-1]').attr('id');
      e.preventDefault();
      $('[data-tabs-1] li').removeClass('is-active');
      $('[data-tabs-1] li > a').attr('aria-selected', false)
      $('[data-tabs-1] li:nth-child('+(el+1)+')').addClass('is-active');
      $('[data-tabs-1] li:nth-child('+(el+1)+') > a').attr('aria-selected', true)

      $('[data-tabs-content="'+$id+'"] > .tabs-panel').removeClass('is-active');
      $('[data-tabs-content="'+$id+'"]').find($href).addClass('is-active');

    })
  })

  $('[data-tabs-2]').find('li > a').each(function(el){
    var $href = $(this).attr('href');
    $(this).on('click', function(e){
      var $id = $('[data-tabs-2]').attr('id');
      e.preventDefault();
      $('[data-tabs-2] li').removeClass('is-active');
      $('[data-tabs-2] li > a').attr('aria-selected', false)
      $('[data-tabs-2] li:nth-child('+(el+1)+')').addClass('is-active');
      $('[data-tabs-2] li:nth-child('+(el+1)+') > a').attr('aria-selected', true)

      $('[data-tabs-content="'+$id+'"] > .tabs-panel').removeClass('is-active');
      $('[data-tabs-content="'+$id+'"]').find($href).addClass('is-active');

    })
  })

  // contoh simulasi delay tampilin modal syarat dan ketentuan, jika tidak mau ada delay bisa hilangkan fungsi timeoutnya.
  setTimeout(() => {
    //$('#syarat-ketentuan-modal').foundation('open');
  }, 1000);

  // contoh fungsi klik untuk button tidak setuju
  $('#btn-cancel').on('click', function(e){
    e.preventDefault();
    alert('Anda tidak setuju, sistem akan men-logout kan anda sekarang.');
    $('#syarat-ketentuan-modal').foundation('close');
  });

  // contoh fungsi klik untuk button setuju
  $('#btn-setuju').on('click', function(e){
    e.preventDefault();
    $('#syarat-ketentuan-modal').foundation('close');
  })

  $('#pasaran ul li > a').on('click', function(e){
    e.preventDefault();
    var play = $(this).data('play');
    console.log(play)

    if($(this).hasClass('active')) {
      
      $(this).removeClass('active');
      $('.sub-section').removeClass('active');
    }else {
      $('.sub-section').removeClass('active');
      $('#pasaran ul li > a').removeClass('active');
      
      $(this).addClass('active');
      $('#'+play).addClass('active');

    }
  })
})