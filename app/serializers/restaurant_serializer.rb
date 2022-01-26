class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :cuisine_type, :favorite, :user_id
end
