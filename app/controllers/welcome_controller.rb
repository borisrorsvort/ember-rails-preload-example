class WelcomeController < ApplicationController
  def index
    store_preloaded("pageSettings", page_settings_json)
    # store_preloaded("posts", Post.all.to_json)
  end

  def about

  end

  def page_settings_json
    data = {
      title: 'Welcome to my blog',
      description: 'A collections of my best articles',
    }
    data.to_json
  end
end
