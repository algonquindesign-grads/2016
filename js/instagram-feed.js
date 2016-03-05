var feed = new Instafeed({
  get: 'user',
  userId: '2814574886',
  accessToken: '2814574886.6cce642.50e0d6ddd24b4e9abfef4ead0b56dfae',
  limit: 3,
  resolution: 'standard_resolution',
  target: 'instagram-feed',
  link: 'true',
  filter: function(image) {
      var MAX_LENGTH = 100;

      if (image.caption && image.caption.text) {
        image.short_caption = image.caption.text.slice(0, MAX_LENGTH);
      } else {
        image.short_caption = "";
      }
      return true;
    },
  template: '<li class="instagram-post unit xs-1-2 m-1-3"><a target="_blank" href="{{link}}"><img class="img-flex island-1-4" src="{{image}}" alt="{{caption}}"><p class="mouseoff">{{model.short_caption}}...</p></a></li>'
});
feed.run();
