require_relative '../ChunkyPNG/lib/image.rb'


class PostsController < ApplicationController

  before_action :require_current_user!

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      image = ImageManipulator.new(@post.image.path)
      image.encode("no message yet", @post.image.path)
    else
      render @post.errors.full_messages
    end
  end

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end


  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to root_url
  end

  private


  def post_params
    params.require(:post).permit(:user_id, :body, :image)
  end

end
