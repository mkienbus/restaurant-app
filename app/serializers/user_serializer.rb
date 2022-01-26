class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :restaurants, serializer: RestaurantSerializer
end
