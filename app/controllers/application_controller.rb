class ApplicationController < ActionController::API
  include ActionController::Cookies


  #before_action :authorize

  private 
    
    # def authorize
    #   render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    # end

    # def current_user
    #   @current_user = User.find(session[:user_id])
    # end

end
