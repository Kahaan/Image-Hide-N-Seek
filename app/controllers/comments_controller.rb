class CommentsController < ApplicationController

  def index
    @comments = Post.find(params[:post_id]).comments
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
      render json: @comment
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end

end
