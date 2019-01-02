class PagesController < ApplicationController

  def encode
    @post = Post.find(params[:id])
  end

end
