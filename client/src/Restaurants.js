import React, {useEffect, useState} from 'react';
import RestaurantCard from './RestaurantCard.js' 
import RestaurantForm from './RestaurantForm.js';

function Restaurants({user}) {

  const[restaurants, setRestaurants] = useState([]);
  console.log(restaurants)

  useEffect(() => {
    fetch("/restaurants")
      .then((r) => r.json())
      .then(setRestaurants)
  }, [])

  function resetDomRemove(restaurant){
    setRestaurants((restaurants) => restaurants.filter(r => r.id !== restaurant.id))
  }

  function resetDomForm(newRestaurant){
    setRestaurants([...restaurants, newRestaurant])
  }

  return (
    <div className="Restaurants">
        <RestaurantForm user = {user} resetDomForm = {resetDomForm}/>
        <h1>Restaurants</h1>
          {restaurants.map((r) => <RestaurantCard restaurant = {r} key = {r.id} user = {user} resetDomRemove = {resetDomRemove}/>)}
    </div>
  );
}

export default Restaurants;