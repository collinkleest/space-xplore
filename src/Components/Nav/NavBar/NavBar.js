import React from 'react';
import './NavBar.sass';

export default function NavBar(props){
    return(
        <nav className="navbar" id={props.id}>
            <ul className="navbar-nav">
                <li>
                    <a className="brand" href="#">SpaceX Explore</a>
                </li>
                {props.children}
            </ul>
        </nav>
    );
}

NavBar.defaultProps = {id: 'navbar'};