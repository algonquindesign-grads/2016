function slide(){"1"==$videoWrap.attr("data-step")?$videoWrap.attr("data-step",2):"2"==$videoWrap.attr("data-step")?$videoWrap.attr("data-step",3):"3"==$videoWrap.attr("data-step")?$videoWrap.attr("data-step",4):"4"==$videoWrap.attr("data-step")&&$videoWrap.attr("data-step",1)}var $btn=$(".gd-btn-play-pause"),video=$(".gd-grad-vid").get(0),$videoWrap=$(".gd-video-wrap"),$bb=$(".hero-billboard"),$stepOne=$("#step-1"),$stepTwo=$("#step-2"),$stepThree=$("#step-3"),$stepFour=$("#step-4"),duration=1e4,$bar=$(".bar"),slideTime=setInterval(slide,duration);$stepOne.on("click",function(e){e.preventDefault(),$videoWrap.attr("data-step","1")}),$stepTwo.on("click",function(e){e.preventDefault(),$videoWrap.attr("data-step","2")}),$stepThree.on("click",function(e){e.preventDefault(),$videoWrap.attr("data-step","3")}),$stepFour.on("click",function(e){e.preventDefault(),$videoWrap.attr("data-step","4")}),$btn.on("click",function(){$bb.css("display","none"),"1"==$videoWrap.attr("data-step")?$videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="https://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="https://grads.images.algonquindesign.ca/2016/img/website-banners-1.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>'):"2"==$videoWrap.attr("data-step")?$videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="https://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="https://grads.images.algonquindesign.ca/2016/img/website-banners-2.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>'):"3"==$videoWrap.attr("data-step")?$videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="https://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="https://grads.images.algonquindesign.ca/2016/img/website-banners-3.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>'):"4"==$videoWrap.attr("data-step")&&$videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="https://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="https://grads.images.algonquindesign.ca/2016/img/website-banners-4.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>'),$videoWrap.addClass("is-playing"),$videoWrap.removeClass("is-paused"),$(".gd-grad-vid").get(0).play(),$btn.addClass("pause"),$btn.removeClass("play")}),$btn.on("click",function(){video.paused?($videoWrap.addClass("is-playing"),$videoWrap.removeClass("is-paused"),video.play(),$btn.addClass("pause"),$btn.removeClass("play")):($videoWrap.addClass("is-paused"),$videoWrap.removeClass("is-playing"),video.pause(),$btn.addClass("play"),$btn.removeClass("pause"))});
