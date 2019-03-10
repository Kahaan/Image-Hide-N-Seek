require_relative '../ChunkyPNG/lib/image.rb'


class PostsController < ApplicationController

  before_action :require_current_user!

  def new
    @post = Post.new
  end

  def create
    # user_id = params[:user_id]
    # body = params[:body]
    # image = params[:image]
    @post = Post.new(post_params)
    @post.user_id = current_user.id

    if @post.save
      image = ImageManipulator.new(@post.image.path)
      image.encode("no message yet", @post.image.path)
      redirect_to @post
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
