import './App.css';
import React from 'react';
import Restaurants from './Restaurants.js';
import RestaurantForm from './RestaurantForm.js'

function App() {

//MVP components
//App
  //restaurant container (index)
    //restaurant card (show)
  //restaurant form
  //Nav bar
    //link to add restaurant form (create)
    //link to logout
  //sign in form
  //sign up form

  return (
    <div className="App">
      <header className="App-header">
        <RestaurantForm />
        <Restaurants />
      </header>
    </div>
  );
}

export default App;