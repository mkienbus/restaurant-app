import React from 'react';

function RestaurantCard({restaurant}){

    return(
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine_type}</p>
            <p>{restaurant.favorite}</p>
            <p>{restaurant.address}</p>
            <br></br>
        </div>
    );

}

export default RestaurantCard;