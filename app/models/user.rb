class User < ApplicationRecord
    has_many :restaurants
    has_secure_password

    validates :username, presence: true, uniqueness: true, length: {minimum: 2}
end
