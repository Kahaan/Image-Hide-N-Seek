require_relative '../ChunkyPNG/lib/image.rb'

class PagesController < ApplicationController

  before_action :require_current_user!

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

  def decrypt
    @post = Post.find(params[:id])
    image = ImageManipulator.new(@post.image.path)
    @message = image.decode_message(@post.image.path) || "empty"
    render 'decode'
  end

end
