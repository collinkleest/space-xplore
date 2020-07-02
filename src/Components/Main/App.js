import React from 'react';
import NavElement from '../Nav/NavElement/NavElement';
import NavBar from '../Nav/NavBar/NavBar';

export default function App(props){
    return(
        <div>
            <NavBar> 
                
                <NavElement 
                linkText="Rockets"
                />

                <NavElement
                linkText="Landing Pads"
                />

                <NavElement
                linkText="Launch Pads"
                />

                <NavElement
                linkText="Missions"
                />
                
                <NavElement
                linkText="History"
                />

            </NavBar>
        </div>
    );
}