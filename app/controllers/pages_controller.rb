require_relative '../ChunkyPNG/lib/image.rb'

class PagesController < ApplicationController

  def encode_view
    @post = Post.find(params[:id])
    render :encode
  end

  def encrypt
    @post = Post.find(params[:id])
    image = ImageManipulator.new(@post.image.path)
    image.encode(params[:message], @post.image.path)
    redirect_to @post
  end

end
