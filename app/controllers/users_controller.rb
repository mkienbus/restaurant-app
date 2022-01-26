class UsersController < ApplicationController
    #skip_before_action :authorize, only: :create

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
