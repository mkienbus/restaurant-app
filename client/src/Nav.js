import React from "react";
import {NavLink} from "react-router-dom";

function Nav(){


    return(

        <div>
            <h1>Navigation bar</h1>
            <NavLink to="/">Home  </NavLink>
            <NavLink to="/about">About  </NavLink>
        </div>
    )
}


export default Nav;