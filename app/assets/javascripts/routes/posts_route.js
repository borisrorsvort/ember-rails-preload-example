App.PostsRoute = Em.Route.extend({
  model: function() {
    // First solution with live filter when using initializer
    // return this.get('store').filter('post')

    //Second solution - Load from PreloadSotre here
    var store = this.get('store');
    if (PreloadStore.get('posts')) {
      return PreloadStore.getAndRemove('posts').then(function(json) {
        // Optional
        json.forEach(function(post) {
          if (!store.recordIsLoaded(App.Post, post.id)) {
            store.push('post', post);
          }
        });
        // returns the raw collection
        return json
      });
    } else {
      return this.get('store').find('post')
    }
  }
});
