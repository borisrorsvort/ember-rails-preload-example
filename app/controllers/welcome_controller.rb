class WelcomeController < ApplicationController
  def index
    store_preloaded("posts", Post.all.to_json)
  end
end
