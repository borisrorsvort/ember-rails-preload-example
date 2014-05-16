App.PostsRoute = Em.Route.extend({
  model: function(params, transition) {
    // Load from PreloadSotre here
    // var store = this.get('store');
    // if (PreloadStore.get('posts')) {
    //   return PreloadStore.getAndRemove('posts').then(function(posts) {
    //     posts.forEach(function(post) {
    //       if (!store.recordIsLoaded(App.Post, post.id)) {
    //         store.push('post', post);
    //       }
    //     });

    //     return posts
    //   });
    // } else {
      return this.get('store').find('post')
    // }
    // return this.get('store').find('post')
  }
});
