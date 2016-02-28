var $btn = $(".gd-btn-play-pause");
var video = $(".gd-grad-vid").get(0);
var $videoWrap = $('.gd-video-wrap');

$btn.on('click', function () {
  if (video.paused) {
    $videoWrap.addClass('is-playing');
    $videoWrap.removeClass('is-paused');
    video.play();
    $btn.addClass('pause');
    $btn.removeClass('play');
  } else {
    $videoWrap.addClass('is-paused');
    $videoWrap.removeClass('is-playing');
    video.pause();
    $btn.addClass('play')
    $btn.removeClass('pause');
  }
});
