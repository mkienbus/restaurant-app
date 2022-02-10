class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

# rescue ActiveRecord::RecordInvalid => e
#     render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
#   end 

    #POST login
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    #DELETE logout
    def destroy
        session.delete :user_id
        head :no_content
    end
    
end
