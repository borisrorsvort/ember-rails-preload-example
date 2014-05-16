App.WelcomeController = Em.Controller.extend({
  init: function () {
    this._super();

    if (PreloadStore.get('pageSettings')) {
      var settings = PreloadStore.get('pageSettings');
      this.set('title', settings.title)
      this.set('description', settings.description)
    }
  }
});
