import React, {useState} from 'react';
import EditForm from './EditForm';

function RestaurantCard({restaurant, resetDomRemove, user, handleEdit}){

  const [editForm, setEditForm] = useState(false)
  const [editButton, setEditButton] = useState("Show edit form")

    function handleRemove(restaurant){
        fetch(`/restaurants/${restaurant.id}`, {
          method: 'DELETE'
        }).then(r => {resetDomRemove(restaurant)})
      }
    
    function handleEditClick(){
      setEditForm(!editForm)
      !editForm ? setEditButton("Hide edit form") : setEditButton("Show edit form")
    }

    return(
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine_type}</p>
            <p>{restaurant.favorite}</p>
            <p>{restaurant.address}</p>
            <br></br>
            <button onClick = {e => handleRemove(restaurant)}>Remove above restaurant</button>
            <button onClick = {e => handleEditClick()}>{editButton}</button>
            {editForm ? <EditForm restaurant = {restaurant} user = {user} handleEdit = {handleEdit} handleEditClick = {handleEditClick}/> : null}
        </div>
    );

}

export default RestaurantCard;