import React, {useState} from 'react';
import EditForm from './EditForm';

function RestaurantCard({restaurant, resetDomRemove, user}){

  const [editForm, setEditForm] = useState(false)

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
            <button onClick = {e => setEditForm(!editForm)}>Display/hide edit form</button>
            {editForm ? <EditForm restaurant = {restaurant} user = {user} /> :null}
        </div>
    );

}

export default RestaurantCard;