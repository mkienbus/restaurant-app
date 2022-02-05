import './App.css';
import React from 'react';
import {useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Restaurants from './Restaurants.js';
import About from './About.js';
import LoginForm from './LoginForm.js';
import Nav from './Nav';


function App() {
  const [user, setUser] = useState(null)

  //automatic login
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  }, []);

  function handleLogoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    })
      .then(r => setUser(null))
  }

  if (!user) return <LoginForm setUser = {setUser} />

  return (
    <>
    <main id = "app">
    <button id = "logout" onClick = {handleLogoutClick}>Logout</button>
      <div id = "navBar">
        <Nav />
      </div>
        <Switch>
          <Route path = "/about">
            <About />
          </Route>
        <Route exact path = "/">
            <Restaurants user = {user} />
        </Route>
        </Switch>
    </main>
    </>
  );
}

export default App;