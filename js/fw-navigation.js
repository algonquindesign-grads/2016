$(function(){
  $('body').removeClass('noscript');

  $('.fw-toggle').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on');
  });
});
