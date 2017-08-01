var $btn = $(".gd-btn-play-pause");
var video = $(".gd-grad-vid").get(0);
var $videoWrap = $('.gd-video-wrap');
var $bb = $('.hero-billboard');
var $stepOne = $('#step-1');
var $stepTwo = $('#step-2');
var $stepThree = $('#step-3');
var $stepFour = $('#step-4');
var duration = 10000;
var $bar = $('.bar');

var slideTime = setInterval(slide, duration);

$stepOne.on('click', function(e) {
  e.preventDefault();
  $videoWrap.attr('data-step', '1');
});

$stepTwo.on('click', function(e) {
  e.preventDefault();
  $videoWrap.attr('data-step', '2');
});

$stepThree.on('click', function(e) {
  e.preventDefault();
  $videoWrap.attr('data-step', '3');
});

$stepFour.on('click', function(e) {
  e.preventDefault();
  $videoWrap.attr('data-step', '4');
});



function slide(){
  if ($videoWrap.attr('data-step') == '1'){
    $videoWrap.attr('data-step', 2);
    // $bar.animate({ right: "100%" }, 0);
  } else if ($videoWrap.attr('data-step') == '2'){
    $videoWrap.attr('data-step', 3);
    // $bar.animate({ right: "100%" }, 0);
  } else if ($videoWrap.attr('data-step') == '3'){
    $videoWrap.attr('data-step', 4);
    // $bar.animate({ right: "100%" }, 0);
  } else if ($videoWrap.attr('data-step') == '4'){
    $videoWrap.attr('data-step', 1);
    // $bar.attr('data-state', '0');
  }
}



$btn.on('click', function () {
  $bb.css('display', 'none');
  if ($videoWrap.attr('data-step') == '1'){
    $videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="http://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="http://grads.images.algonquindesign.ca/2016/img/website-banners-1.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>');
  } else if ($videoWrap.attr('data-step') == '2'){
    $videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="http://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="http://grads.images.algonquindesign.ca/2016/img/website-banners-2.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>');
  } else if ($videoWrap.attr('data-step') == '3'){
    $videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="http://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="http://grads.images.algonquindesign.ca/2016/img/website-banners-3.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>');
  } else if ($videoWrap.attr('data-step') == '4'){
    $videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="http://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="http://grads.images.algonquindesign.ca/2016/img/website-banners-4.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>');
  }

  $videoWrap.addClass('is-playing');
  $videoWrap.removeClass('is-paused');
  $(".gd-grad-vid").get(0).play();
  $btn.addClass('pause');
  $btn.removeClass('play');
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


