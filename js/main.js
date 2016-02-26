var $btn = $(".gd-btn-play-pause");
var video = $(".gd-grad-vid").get(0);

$btn.on('click', function () {
	if (video.paused) {
		video.play();
		$btn.addClass('pause');
		console.log('play');
		$btn.removeClass('play');
	} else {
		video.pause();
		$btn.addClass('play')
		console.log('pause');
		$btn.removeClass('pause');
	}
});

