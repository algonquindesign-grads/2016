var $rtt = $('.rtt');

$('.fw-nav-list').localScroll();
$('.rtt').localScroll();

var $fe = $('.fe-holder');

$fe.waypoint(function (direction) {
  if (direction == 'down') {
    $rtt.addClass('js-rtt');
  } else {
    $rtt.removeClass('js-rtt');
  }
});
