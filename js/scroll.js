var $rtt = $('.rtt');

// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 80em)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {

  if (mq.matches) {
    $('.fw-nav-list').localScroll({offset: { top: 0 }});
    $('.rtt').localScroll({offset: { top: -100 }});
  } else {
    $('.fw-nav-list').localScroll({offset: { top: -80 }});
    $('.rtt').localScroll({offset: { top: -100 }});
  }

}





var $ah = $('.about-holder');

$ah.waypoint(function (direction) {
  if (direction == 'down') {
    $rtt.addClass('js-rtt');
  } else {
    $rtt.removeClass('js-rtt');
  }
});
