import React, {useEffect, useState} from 'react';
import RestaurantCard from './RestaurantCard.js' 
import RestaurantForm from './RestaurantForm.js';

function Restaurants({user}) {

  const[restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(`/users/${user.id}`)
      .then((r) => r.json())
      .then((d) => {
        setRestaurants(d.restaurants)
      })
      //eslint-disable-next-line
  }, [])

  function resetDomRemove(restaurant){
    setRestaurants((restaurants) => restaurants.filter(r => r.id !== restaurant.id))
  }

  function resetDomForm(newRestaurant){
    setRestaurants([...restaurants, newRestaurant])
  }

  function handleEdit(restaurant){
      const edited = restaurants.map(r => {
        if (restaurant.id === r.id){
          return restaurant
        }

        else{
          return r
        }
      })
      setRestaurants(edited)

  }

  return (
    <div className= "restaurants">
        <RestaurantForm user = {user} resetDomForm = {resetDomForm}/>
          <div id = "restaurants">
          <h1 style={{marginLeft: "22%"}}>Restaurants</h1>
          {restaurants.map((r) => 
          <RestaurantCard restaurant = {r} key = {r.id} user = {user} resetDomRemove = {resetDomRemove} handleEdit = {handleEdit}/>)
          }
          </div>
    </div>
  );
}

export default Restaurants;