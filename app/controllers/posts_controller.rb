class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
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
    render 'index'
  end

  private


  def post_params
    params.require(:post).permit(:image)
  end

end
