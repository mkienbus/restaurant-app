class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :address
      t.string :cuisine_type
      t.boolean :favorite

      t.timestamps
    end
  end
end
