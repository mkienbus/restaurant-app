class RestaurantsController < ApplicationController
    #index, create, update, destroy, show

    def create
        restaurant = Restaurant.create(restaurant_params)
        render json: restaurant
    end
    
    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant

    end

    def update
        restaurant = Restaurant.create(restaurant_params)
        render json: restaurant
    end

    def destroy
        restaurant = Restaurant.find(params[:id])
        restaurant.destroy
        head :no_content
    end

    private

    def restaurant_params
        params.permit(:name, :address, :cuisine_type, :favorite, :user_id)
    end
end
