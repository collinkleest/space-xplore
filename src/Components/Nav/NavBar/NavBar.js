import React from 'react';
import './NavBar.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(props){
    return(
        <nav className="navbar" id={props.id}>
            <a 
            className="brand" 
            href="#" 
            onClick={() => props.onClick('home')}
            >
                Space Xplore
            </a>
            <FontAwesomeIcon 
            icon={faBars} 
            className="bars" 
            onClick={() => {document.getElementById('nav-links').classList.toggle('openNav')}}
            />
            <ul className="navbar-nav" id="nav-links">
                {props.children}
            </ul>
        </nav>
    );
}

NavBar.defaultProps = {id: 'navbar'};