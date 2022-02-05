import React from "react";
import {NavLink} from "react-router-dom";

function Nav(){


    return(

        <div>
            <NavLink to="/">HOME  </NavLink>
            <NavLink to="/about">ABOUT  </NavLink>
        </div>
    )
}


export default Nav;