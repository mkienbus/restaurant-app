class SessionsController < ApplicationController

    #POST login
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    #DELETE logout
    def destroy

    end
    
end
