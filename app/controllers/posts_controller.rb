class PostsController < ApplicationController
  def index
    @posts = Post.all

    respond_to do |format|
      format.html {
        store_preloaded("posts", @posts.to_json)
      }
      format.json { render json: @posts}
    end
  end
end