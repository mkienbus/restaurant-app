class Restaurant < ApplicationRecord
    belongs_to :user

    scope :favorite, -> { where(favorite: true) }
      
end
