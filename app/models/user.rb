class User < ApplicationRecord
    has_many :restaurants

    validates :username, presence: true, uniqueness: true
end
