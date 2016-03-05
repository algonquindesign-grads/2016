$(function(){
  $('body').removeClass('noscript');

  $('.fw-toggle').click(function(e){
    e.preventDefault()
    toggleNav();
  });
});

function toggleNav(){
  if($('.fw-header').attr('data-state') == 'closed'){
    $('.fw-header').attr('data-state','open');
  }else{
    $('.fw-header').attr('data-state','closed');
  }
}



$('.fw-navigation a').on('keypress', function (e) {
  $($(this).attr('href')).focus();
});

$('.fw-navigation a').on('click', function (e) {
  $('.fw-header').attr('data-state','closed');
});
