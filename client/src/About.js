import React from 'react';
import { Link } from 'react-router-dom';

function About(){



    return(
        <div>
            <Link to={`/`}>Home</Link>
            <h2>Restaurant Tracking App</h2>
            <p>An application for tracking your favorite restaurants!</p>
        </div>
    )
}

export default About;