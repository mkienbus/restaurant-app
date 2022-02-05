import React from 'react';
import { Link } from 'react-router-dom';

function About(){



    return(
        <div>
            <h2>Restaurant Tracking App</h2>
            <p>An application for tracking your favorite restaurants!</p>
            <p>Created by Michael Kienbusch</p>
            <p>Github <Link to={{ pathname: "https://github.com/mkienbus" }} target="_blank">here</Link></p>
            <p>Dev.to <Link to={{ pathname: "https://dev.to/mkienbus" }} target="_blank">here</Link></p>
        </div>
    )
}

export default About;