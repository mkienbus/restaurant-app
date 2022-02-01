class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    #GET route, needed?
    def index
        users = User.all
        render json: users
    end

    #GET route
    def show
        user = User.find(params[:id])
        ## use below assignment once front end allows a session to be created with a user
        #user = User.find(@current_user.id)
        render json: user

    end

    #POST route for signup
    def create
        user = User.create(user_params)
        render json: user
    end


    private

    def user_params
        params.permit(:username, :password)
    end
end
