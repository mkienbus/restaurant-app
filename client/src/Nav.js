import React from "react";
import {NavLink} from "react-router-dom";

function Nav(){


    return(

        <div>
            <h1>Navigation bar</h1>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}


export default Nav;