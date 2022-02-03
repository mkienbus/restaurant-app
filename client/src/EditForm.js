import React, {useState} from 'react';

function EditForm({restaurant, user}){
    const [name, setName] = useState(restaurant.name)
    const [cuisine_type, setCuisineType] = useState(restaurant.cuisine_type)
    const [address, setAddress] = useState(restaurant.address)
    const [favorite, setFavorite] = useState(restaurant.favorite)

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/restaurants${restaurant.id}`, {
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
            .then(console.log('edited'))
    }

    
    return(
        <div>
            <h3>Edit restaurant information</h3>
            <form onSubmit = {handleSubmit}>
                {/* text align left in css */}
                <label>Name:</label>
                <input type = "text" id = "name" value = {name} onChange = {e => setName(e.target.value)}/>
                <br></br>
                <label>Cuisine type:</label>
                <input type = "text" id = "cuisineType" value = {cuisine_type} onChange = {e => setCuisineType(e.target.value)}/>
                <br></br>
                <label>Address:</label>
                <input type = "text" id = "address" value = {address} onChange = {e => setAddress(e.target.value)}/>
                <br></br>
                <label>Favorite?</label>
                <input type = "checkbox" id = "favorite" value = {favorite} onChange = {e => setFavorite(e.target.checked)}/>
                <br></br>
                <input type = "submit"/>
            </form>
        </div>
    )
}

export default EditForm;