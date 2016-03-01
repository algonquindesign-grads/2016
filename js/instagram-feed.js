var feed = new Instafeed({
  get: 'user',
  userId: '2814574886',
  accessToken: '2814574886.6cce642.50e0d6ddd24b4e9abfef4ead0b56dfae',
  limit: 3,
  resolution: 'standard_resolution',
  target: 'instagram-feed',
  template: '<li class="unit xs-1-2  m-1-3"><img class="img-flex island-1-2" src="{{image}}" alt="{{caption}}"></li>'
});
feed.run();
