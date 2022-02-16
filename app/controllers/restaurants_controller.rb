class RestaurantsController < ApplicationController
    skip_before_action :authorize

    #POST route for create
    def create
        restaurant = Restaurant.create(restaurant_params)
        render json: restaurant
    end
    
    #GET route for index
    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    #GET route for favorites
    def favorites
        restaurants = Restaurant.favorite
        render json: restaurants
    end

    #GET route for show
    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant

    end

    #PATCH route for update
    def update
        restaurant = Restaurant.find(params[:id])
        restaurant.update(restaurant_params)
        render json: restaurant
    end

    #DELETE route for destroy
    def destroy
        restaurant = Restaurant.find(params[:id])
        restaurant.destroy
        head :no_content
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(:name, :address, :cuisine_type, :favorite, :user_id)
    end
end
