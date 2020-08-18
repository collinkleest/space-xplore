// react imports
import React from 'react';
import PropTypes from 'prop-types';

// custom component imports
import { NavBrand, NavElement, NavLink } from './NavElements';

const NavBar = (props) => {
    return (
        <div className="container-fluid bg-dark fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    {props.children}
                </nav>
            </div>
        </div>
    )
}
NavBar.propTypes = { children: PropTypes.arrayOf(PropTypes.element) }

const Navigation = () => {
    return (
        <NavBar>
            <NavBrand text="SPACE-XPLORE" pathTo="/" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <NavElement>
                        <NavLink pathTo="/rockets" text="Rockets" />
                    </NavElement>
                    <NavElement>
                        <NavLink pathTo="/landing-pads" text="Landing Pads" />
                    </NavElement>
                    <NavElement>
                        <NavLink pathTo="/launch-pads" text="Landing Pads" />
                    </NavElement>
                    <NavElement>
                        <NavLink pathTo="/missions" text="Missions" />
                    </NavElement>
                    <NavElement>
                        <NavLink pathTo="/history" text="History" />
                    </NavElement>
                    <NavElement>
                        <NavLink pathTo="/launches" text="Launches" />
                    </NavElement>
                </ul>
            </div>

        </NavBar>
    );
}
export default Navigation; 