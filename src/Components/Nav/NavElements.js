// react imports
import React from 'react';
import PropTypes from 'prop-types';

// custom components
import { Link } from 'react-router-dom';

export const NavLink = (props) => {
    return (
        <Link to={props.pathTo} className="nav-link text-white">
            {props.text}
        </Link>
    );
}
NavLink.propTypes = { pathTo: PropTypes.string.isRequired, text: PropTypes.string.isRequired };

export const NavElement = (props) => {
    return (
        <li className="nav-item">
            {props.children}
        </li>
    )
}
NavElement.propTypes = { children: PropTypes.element };

export const NavBrand = (props) => {
    return (
        <Link className="navbar-brand text-white" to={props.pathTo}>
            {props.text}
        </Link>
    );
}
NavBrand.propTypes = { pathTo: PropTypes.string.isRequired, text: PropTypes.string.isRequired }
