import './App.css';
import React from 'react';
import {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Restaurants from './Restaurants.js';
import RestaurantForm from './RestaurantForm.js';
import LoginForm from './LoginForm.js';

function App() {
  const [user, setUser] = useState(null)

  function handleLogoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(r => setUser(null))
  }

  if (!user) return <LoginForm setUser = {setUser} />

  return (
    <>
    <main>
      <Switch>
        <Route path = "/new">
          <RestaurantForm />
        </Route>
       <Route path = "/">
          <Restaurants user = {user} />
          <button onClick = {handleLogoutClick}>Logout</button>
       </Route>
      </Switch>
    </main>
    </>
  );
}

export default App;