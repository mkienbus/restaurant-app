import React from 'react';

function RestaurantCard({restaurant, resetDom}){

    function handleRemove(restaurant){
        fetch(`/restaurants/${restaurant.id}`, {
          method: 'DELETE'
        }).then(r => {resetDom(restaurant)})
      }

    return(
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine_type}</p>
            <p>{restaurant.favorite}</p>
            <p>{restaurant.address}</p>
            <br></br>
            <button onClick = {e => handleRemove(restaurant)}>Remove above restaurant</button>
        </div>
    );

}

export default RestaurantCard;