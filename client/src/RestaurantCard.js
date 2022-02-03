import React, {useState} from 'react';

function RestaurantCard({restaurant, resetDomRemove}){

  const [editForm, setEditForm] = (false)

    function handleRemove(restaurant){
        fetch(`/restaurants/${restaurant.id}`, {
          method: 'DELETE'
        }).then(r => {resetDomRemove(restaurant)})
      }

    return(
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine_type}</p>
            <p>{restaurant.favorite}</p>
            <p>{restaurant.address}</p>
            <br></br>
            <button onClick = {e => handleRemove(restaurant)}>Remove above restaurant</button>
            <button onClick = {e => console.log(e.target.value)}>Edit</button>
            {/* {editForm ?  } */}
        </div>
    );

}

export default RestaurantCard;