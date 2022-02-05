import React, {useState} from 'react';

function EditForm({restaurant, user, handleEdit, handleEditClick}){
    const [name, setName] = useState(restaurant.name)
    const [cuisine_type, setCuisineType] = useState(restaurant.cuisine_type)
    const [address, setAddress] = useState(restaurant.address)
    const [favorite, setFavorite] = useState(restaurant.favorite)

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/restaurants/${restaurant.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name,
                address,
                cuisine_type,
                favorite,
                user_id: user.id
            }),
        })
            .then(r =>r.json())
            .then(r => {
                handleEdit(r)
                handleEditClick()
            })
            
    }


    
    return(
        <div>
            <h3>Edit restaurant information</h3>
            <form onSubmit = {handleSubmit}>
                <label>Name:</label>
                <input type = "text" className = "name" value = {name} onChange = {e => setName(e.target.value)}/>
                <br></br>
                <label>Cuisine type:</label>
                <input type = "text" className = "cuisineType" value = {cuisine_type} onChange = {e => setCuisineType(e.target.value)}/>
                <br></br>
                <label>Address:</label>
                <input type = "text" className = "address" value = {address} onChange = {e => setAddress(e.target.value)}/>
                <br></br>
                <label>Favorite?</label>
                <input type = "checkbox" className = "favorite" value = {favorite} checked = {favorite} onChange = {e => setFavorite(!favorite)}/>
                <br></br>
                <input type = "submit" value = "Submit changes"/>
            </form>
        </div>
    )
}

export default EditForm;