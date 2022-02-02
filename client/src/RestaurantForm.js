import React, {useState} from 'react'


function RestaurantForm({user, resetDomForm}){
    const [name, setName] = useState("")
    const [cuisine_type, setCuisineType] = useState("")
    const [address, setAddress] = useState("")
    const [favorite, setFavorite] = useState(false)


    function handleSubmit(e){
        e.preventDefault();
        fetch('/restaurants', {
            method: "POST",
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
            //.then(r => resetDomForm(r))
          
    }

    return(
        <div>
            <h1>Add a restaurant to the list</h1>
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
    );


}

export default RestaurantForm;