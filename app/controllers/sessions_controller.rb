class SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      redirect_to '/posts'
    else
      render (json: ['Credentials were wrong'], status: :401)
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      redirect_to new_session_url
    else
      render(json: ["Nobody signed in"], status: 404)
    end
  end

end
