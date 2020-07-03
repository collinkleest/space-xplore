import React from 'react';
import './NavElement.sass';

export default function NavElement(props){
    return(
        <li className="nav-element">
            <a href={props.href} 
            className="nav-link"
            onClick={() => props.onClick(props.linkText)}>
                {props.linkText}
            </a>
        </li>
    );
}

NavElement.defaultProps = {href: '#', linkText: 'Default'};