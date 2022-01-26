# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
    {username: 'Michael Kienbusch'},
    {username: "John Smith"}
])

restaurants = Restaurant.create([

    #user_id: 1
    {name: 'Vivi Pho', address: "780 S Colorado Blvd B, Glendale, CO 80246", cuisine_type: "Vietnamese", favorite: true, user_id: 1},
    {name: 'Denver Pizza Company', address: "309 W 11th Ave, Denver, CO 80204", cuisine_type: "Pizza", favorite: false, user_id: 1},
    {name: 'Raising Cane\'s Chicken Fingers', address: "14241 E Alameda Ave, Aurora, CO 80012", cuisine_type: "Fried Chicken", favorite: true, user_id: 1},

    #user_id: 2
    {name: 'Walter\'s 303 Lowry', address: "200 Quebec St #109, Denver, CO 80230", cuisine_type: "Pizza", favorite: true, user_id: 2},
    {name: 'Raising Cane\'s Chicken Fingers', address: "14241 E Alameda Ave, Aurora, CO 80012", cuisine_type: "Fried Chicken", favorite: true, user_id: 2}
])
