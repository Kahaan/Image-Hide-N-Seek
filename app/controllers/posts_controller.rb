require_relative '../ChunkyPNG/lib/image.rb'
require 'tempfile'


class PostsController < ApplicationController

  before_action :require_current_user!

  def new
    @post = Post.new
  end


  def create
    @post = Post.new(post_params)
    file = Tempfile.new('temp')

    if @post.save
      s3 = Aws::S3::Resource.new(region: 'us-west-1', access_key_id: Rails.application.credentials.aws[:access_key_id], secret_access_key: Rails.application.credentials.aws[:secret_access_key])
      obj = s3.bucket('image-hide-n-seek').object(@post.image.path[1..-1])
      obj.get(response_target: file.path)

      # image = ImageManipulator.new(@post.image.path)
      image = ImageManipulator.new(file.path)
      image.encode("no message yet", file.path)
      obj.upload_file(file.path)



      render json: @post
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
