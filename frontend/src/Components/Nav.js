import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <nav id="">
            <ul className="nav-links">
                <Link to='/Home'>
                <button className="">Home</button>
                </Link>
                <Link to='/FindFamily'>
                <button className="">Find Family</button>
                </Link>
                <Link to='/FindHost'>
                <button className="">Find Host</button>
                </Link>
                <Link to='/HelpResources'>
                <button className="">Help + Resources</button>
                </Link>
                <Link to='/About'>
                <button className="">About</button>
                </Link>
            </ul>
        </nav>
  )
}

export default About;