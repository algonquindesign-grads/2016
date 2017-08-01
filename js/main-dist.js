function toggleNav(){"closed"==$(".fw-header").attr("data-state")?$(".fw-header").attr("data-state","open"):$(".fw-header").attr("data-state","closed")}function WidthChange(t){t.matches?($(".fw-nav-list").localScroll({offset:{top:0}}),$(".rtt").localScroll({offset:{top:-100}})):($(".fw-nav-list").localScroll({offset:{top:-80}}),$(".rtt").localScroll({offset:{top:-100}}))}function slide(){"1"==$videoWrap.attr("data-step")?$videoWrap.attr("data-step",2):"2"==$videoWrap.attr("data-step")?$videoWrap.attr("data-step",3):"3"==$videoWrap.attr("data-step")?$videoWrap.attr("data-step",4):"4"==$videoWrap.attr("data-step")&&$videoWrap.attr("data-step",1)}function getTimeRemaining(t){var e=Date.parse(t)-Date.parse(new Date),i=Math.floor(e/1e3%60),o=Math.floor(e/1e3/60%60),n=Math.floor(e/36e5%24);return{total:e,days:Math.floor(e/864e5),hours:n,minutes:o,seconds:i}}function initializeClock(t,e){function i(){var t=getTimeRemaining(e);n.innerHTML=t.days,r.innerHTML=("0"+t.hours).slice(-2),s.innerHTML=("0"+t.minutes).slice(-2),a.innerHTML=("0"+t.seconds).slice(-2),t.total<=0&&clearInterval(l)}var o=document.getElementById(t),n=o.querySelector(".days"),r=o.querySelector(".hours"),s=o.querySelector(".minutes"),a=o.querySelector(".seconds");i();var l=setInterval(i,1e3)}var $filterSelect=$("#filter-select"),$filterBtn=$(".filter-btn");$filterSelect.on("change",function(){$('[for="'+$(this).val()+'"]').click()}),$filterBtn.on("click",function(){$filterSelect.val($(this).attr("for"))}),$(".filter-btn").on("keypress",function(){$(this).click()}),$(function(){$("body").removeClass("noscript"),$(".fw-toggle").click(function(t){t.preventDefault(),toggleNav()})}),$(".fw-navigation a").on("keypress",function(){$($(this).attr("href")).focus()}),$(".fw-navigation a").on("click",function(){$(".fw-header").attr("data-state","closed")}),function(){var t;t=function(){function t(t,e){var i,o;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof t)for(i in t)o=t[i],this.options[i]=o;this.context=null!=e?e:this,this.unique=this._genKey()}return t.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},t.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},t.prototype.run=function(e){var i,o;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(o=document.createElement("script"),o.id="instafeed-fetcher",o.src=e||this._buildUrl(),document.getElementsByTagName("head")[0].appendChild(o),i="instafeedCache"+this.unique,window[i]=new t(this.options,this),window[i].unique=this.unique),!0},t.prototype.parse=function(t){var e,i,o,n,r,s,a,l,d,p,c,h,u,f,g,m,y,w,v,b,$,k,x,S,W,T,C,A;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),this.context.nextUrl="",null!=t.pagination&&(this.context.nextUrl=t.pagination.next_url),"none"!==this.options.sortBy)switch(T="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),W="least"===T[0],T[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",W);break;case"liked":t.data=this._sortBy(t.data,"likes.count",W);break;case"commented":t.data=this._sortBy(t.data,"comments.count",W);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&!1===this.options.mock){if(h=t.data,S=parseInt(this.options.limit,10),null!=this.options.limit&&h.length>S&&(h=h.slice(0,S)),s=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(h=this._filter(h,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(a="","","",A=document.createElement("div"),l=0,b=h.length;l<b;l++){if(d=h[l],"object"!=typeof(p=d.images[this.options.resolution]))throw r="No image found for resolution: "+this.options.resolution+".",new Error(r);g="square",(m=p.width)>(f=p.height)&&(g="landscape"),m<f&&(g="portrait"),c=p.url,window.location.protocol.indexOf("http")>=0&&!this.options.useHttp&&(c=c.replace(/https?:\/\//,"//")),a+=this._makeTemplate(this.options.template,{model:d,id:d.id,link:d.link,type:d.type,image:c,width:m,height:f,orientation:g,caption:this._getObjectProperty(d,"caption.text"),likes:d.likes.count,comments:d.comments.count,location:this._getObjectProperty(d,"location.name")})}for(A.innerHTML=a,n=[],o=0,i=A.childNodes.length;o<i;)n.push(A.childNodes[o]),o+=1;for(w=0,$=n.length;w<$;w++)x=n[w],s.appendChild(x)}else for(v=0,k=h.length;v<k;v++){if(d=h[v],u=document.createElement("img"),"object"!=typeof(p=d.images[this.options.resolution]))throw r="No image found for resolution: "+this.options.resolution+".",new Error(r);c=p.url,window.location.protocol.indexOf("http")>=0&&!this.options.useHttp&&(c=c.replace(/https?:\/\//,"//")),u.src=c,!0===this.options.links?(e=document.createElement("a"),e.href=d.link,e.appendChild(u),s.appendChild(e)):s.appendChild(u)}if("string"==typeof(C=this.options.target)&&(C=document.getElementById(C)),null==C)throw r='No element with id="'+this.options.target+'" on page.',new Error(r);C.appendChild(s),document.getElementsByTagName("head")[0].removeChild(document.getElementById("instafeed-fetcher")),y="instafeedCache"+this.unique,window[y]=void 0;try{delete window[y]}catch(t){t}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,i;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return i=t+"/"+e,null!=this.options.accessToken?i+="?access_token="+this.options.accessToken:i+="?client_id="+this.options.clientId,null!=this.options.limit&&(i+="&count="+this.options.limit),i+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return""+(t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var i,o,n,r,s;for(o=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,i=t;o.test(i);)r=i.match(o)[1],s=null!=(n=this._getObjectProperty(e,r))?n:"",i=i.replace(o,function(){return""+s});return i},t.prototype._getObjectProperty=function(t,e){var i,o;for(o=(e=e.replace(/\[(\w+)\]/g,".$1")).split(".");o.length;){if(i=o.shift(),!(null!=t&&i in t))return null;t=t[i]}return t},t.prototype._sortBy=function(t,e,i){var o;return o=function(t,o){var n,r;return n=this._getObjectProperty(t,e),r=this._getObjectProperty(o,e),i?n>r?1:-1:n<r?1:-1},t.sort(o.bind(this)),t},t.prototype._filter=function(t,e){var i,o,n,r,s;for(i=[],o=function(t){if(e(t))return i.push(t)},n=0,s=t.length;n<s;n++)r=t[n],o(r);return i},t}(),function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.Instafeed=e()}(this,function(){return t})}.call(this),function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll?o.forward:o.backward;for(var r in this.waypoints[i]){var s=this.waypoints[i][r],a=o.oldScroll<s.triggerPoint,l=o.newScroll>=s.triggerPoint,d=a&&l,p=!a&&!l;(d||p)&&(s.queueTrigger(n),t[s.group.id]=s.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,d,p,c,h,u=this.waypoints[r][a],f=u.options.offset,g=u.triggerPoint,m=0,y=null==g;u.element!==u.element.window&&(m=u.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(u):"string"==typeof f&&(f=parseFloat(f),u.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,u.triggerPoint=m+l-f,d=g<s.oldScroll,p=u.triggerPoint>=s.oldScroll,c=d&&p,h=!d&&!p,!y&&c?(u.queueTrigger(s.backward),o[u.group.id]=u.group):!y&&h?(u.queueTrigger(s.forward),o[u.group.id]=u.group):y&&s.oldScroll>=u.triggerPoint&&(u.queueTrigger(s.forward),o[u.group.id]=u.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i===this.waypoints.length-1?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();var $rtt=$(".rtt");if(matchMedia){var mq=window.matchMedia("(min-width: 80em)");mq.addListener(WidthChange),WidthChange(mq)}var $ah=$(".about-holder");$ah.waypoint(function(t){"down"==t?$rtt.addClass("js-rtt"):$rtt.removeClass("js-rtt")});var $btn=$(".gd-btn-play-pause"),video=$(".gd-grad-vid").get(0),$videoWrap=$(".gd-video-wrap"),$bb=$(".hero-billboard"),$stepOne=$("#step-1"),$stepTwo=$("#step-2"),$stepThree=$("#step-3"),$stepFour=$("#step-4"),duration=1e4,$bar=$(".bar"),slideTime=setInterval(slide,duration);$stepOne.on("click",function(t){t.preventDefault(),$videoWrap.attr("data-step","1")}),$stepTwo.on("click",function(t){t.preventDefault(),$videoWrap.attr("data-step","2")}),$stepThree.on("click",function(t){t.preventDefault(),$videoWrap.attr("data-step","3")}),$stepFour.on("click",function(t){t.preventDefault(),$videoWrap.attr("data-step","4")}),$btn.on("click",function(){$bb.css("display","none"),"1"==$videoWrap.attr("data-step")?$videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="https://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="https://grads.images.algonquindesign.ca/2016/img/website-banners-1.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>'):"2"==$videoWrap.attr("data-step")?$videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="https://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="https://grads.images.algonquindesign.ca/2016/img/website-banners-2.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>'):"3"==$videoWrap.attr("data-step")?$videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="https://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="https://grads.images.algonquindesign.ca/2016/img/website-banners-3.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>'):"4"==$videoWrap.attr("data-step")&&$videoWrap.html('<div class="gd-embed gd-embed--16by9"><video class="gd-embed__item gd-grad-vid" src="https://grads.images.algonquindesign.ca/2016/video/test-video.mp4" poster="https://grads.images.algonquindesign.ca/2016/img/website-banners-4.jpg">Framwork 2016 Grad site video.</video></div><button class="gd-btn-play-pause"></button>'),$videoWrap.addClass("is-playing"),$videoWrap.removeClass("is-paused"),$(".gd-grad-vid").get(0).play(),$btn.addClass("pause"),$btn.removeClass("play")}),$btn.on("click",function(){video.paused?($videoWrap.addClass("is-playing"),$videoWrap.removeClass("is-paused"),video.play(),$btn.addClass("pause"),$btn.removeClass("play")):($videoWrap.addClass("is-paused"),$videoWrap.removeClass("is-playing"),video.pause(),$btn.addClass("play"),$btn.removeClass("pause"))});var feed=new Instafeed({get:"user",userId:"2814574886",accessToken:"2814574886.6cce642.50e0d6ddd24b4e9abfef4ead0b56dfae",limit:3,resolution:"standard_resolution",target:"instagram-feed",link:"true",filter:function(t){return t.caption&&t.caption.text?t.short_caption=t.caption.text.slice(0,100):t.short_caption="",!0},template:'<li class="instagram-post unit xs-1-2 m-1-3"><a target="_blank" href="{{link}}"><img class="img-flex island-1-4" src="{{image}}" alt="{{caption}}"><div class="likes"><span>{{likes}}</span></div><p class="mouseoff">{{model.short_caption}}...</p></a></li>'});feed.run();var deadline=new Date(Date.parse(new Date("April 29 2016 18:59:59 GMT-05:00")));initializeClock("clockdiv",deadline);