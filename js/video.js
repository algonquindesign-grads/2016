var $btn = $(".gd-btn-play-pause");
var video = $(".gd-grad-vid").get(0);
var $videoWrap = $('.gd-video-wrap');
var $img = $('.video-img');

$videoWrap.on('click', function () {
  $img.css('display', 'none');
  $videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" loop src="http://grads.images.algonquindesign.ca.s3.amazonaws.com/2016/video/test-video.mp4" poster="http://grads.images.algonquindesign.ca.s3.amazonaws.com/2016/img/website-banners-01.jpg" autoplay>Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>')
});

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


