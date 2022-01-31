import React, {useEffect, useState} from 'react';
import RestaurantCard from './RestaurantCard.js' 

function Restaurants() {

  const[restaurants, setRestaurants] = useState([]);
  console.log(restaurants)

  useEffect(() => {
    fetch("/restaurants")
      .then((r) => r.json())
      .then(setRestaurants)
  }, [])

  return (
    <div className="Restaurants">
        <h1>Restaurants</h1>
          {restaurants.map((r) =><RestaurantCard restaurant = {r} key = {r.id}/>
          )}
    </div>
  );
}

export default Restaurants;