import './App.css';
import React from 'react';
import {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Restaurants from './Restaurants.js';
import RestaurantForm from './RestaurantForm.js';
import Login from './Login.js';

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


function App() {
  const [user, setUser] = useState(null)

  if (!user) return <Login />

  return (
    <>
    <main>
      <Switch>
        <Route path = "new">
          <RestaurantForm />
        </Route>
       <Route path = "/">
          <Restaurants />
       </Route>
      </Switch>
    </main>
    </>
  );
}

export default App;