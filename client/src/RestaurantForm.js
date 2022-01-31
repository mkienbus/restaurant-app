import React, {useState} from 'react'


function RestaurantForm(){
    const [name, setName] = useState("")
    const [cuisineType, setCuisineType] = useState("")
    const [address, setAddress] = useState("")
    const [favorite, setFavorite] = useState(false)


    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div>
            <h1>Add a restaurant</h1>
            <form onSubmit = {handleSubmit}>
                {/* text align left in css */}
                <label>Name</label>
                <input type = "text" id = "name" value = {name} onChange = {e => setName(e.target.value)}/>
                <br></br>
                <label>Cuisine type</label>
                <input type = "text" id = "cuisineType" value = {cuisineType} onChange = {e => setCuisineType(e.target.value)}/>
                <br></br>
                <label>Address</label>
                <input type = "text" id = "address" value = {address} onChange = {e => setAddress(e.target.value)}/>
                <br></br>
                <label>Favorite</label>
                <input type = "checkbox" id = "favorite" value = {favorite} onChange = {e => setFavorite(e.target.checked)}/>
            </form>
        </div>
    );


}

export default RestaurantForm;