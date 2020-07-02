import React from 'react';
import './Navbar.sass';
import Xplore from '../../../assets/images/logos/xplore.png';

export default function NavBar(props){
    return(
        <nav className="navbar" id={props.id}>
            <img src={ Xplore } height="45px" width="70px" />
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    );
}

NavBar.defaultProps = {id: 'navbar'};