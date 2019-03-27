require_relative '../ChunkyPNG/lib/image.rb'

class PagesController < ApplicationController

  before_action :require_current_user!

  def encode_view
    @post = Post.find(params[:id])
    render :encode
  end

  def encrypt
    @post = Post.find(params[:id])
    file = Tempfile.new('temp')

    s3 = Aws::S3::Resource.new(region: 'us-west-1', access_key_id: Rails.application.credentials.aws[:access_key_id], secret_access_key: Rails.application.credentials.aws[:secret_access_key])
    obj = s3.bucket('image-hide-n-seek').object(@post.image.path[1..-1])
    obj.get(response_target: file.path)

    image = ImageManipulator.new(file.path)
    image.encode(params[:secret], file.path)
    obj.upload_file(file.path)  
    # image = ImageManipulator.new(@post.image.path)
    # image.encode(params[:secret], @post.image.path)
    # TODO: Return some text to display while encrypting
  end

  def decrypt
    @post = Post.find(params[:id])

    file = Tempfile.new('temp')
    s3 = Aws::S3::Resource.new(region: 'us-west-1', access_key_id: Rails.application.credentials.aws[:access_key_id], secret_access_key: Rails.application.credentials.aws[:secret_access_key])
    obj = s3.bucket('image-hide-n-seek').object(@post.image.path[1..-1])
    obj.get(response_target: file.path)

    image = ImageManipulator.new(file.path)
    @message = image.decode_message(file.path) || "empty"

    # image = ImageManipulator.new(@post.image.path)
    # @message = image.decode_message(@post.image.path) || "empty"
    render 'decode'
  end

end
