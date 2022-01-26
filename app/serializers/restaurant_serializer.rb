class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :cuisine_type, :favorite, :user_id
  belongs_to :user, serializer: UserSerializer
end
