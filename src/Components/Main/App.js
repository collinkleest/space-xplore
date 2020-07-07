import React from 'react';
import NavElement from '../Nav/NavElement/NavElement';
import NavBar from '../Nav/NavBar/NavBar';
import Home from './Home';
import Landing_Pads from '../Landing_Pads/Landing_Pads.js';
import Rockets from '../Rockets/Rockets';
import MapContainer from '../Landing_Pads/MapContainer.js';
import Missions from '../Missons/Missions';

export default function App(){
    
    const [selection, setSelection] = React.useState('home');
    
    return(
        <div>
            <NavBar> 
            
                <NavElement 
                linkText="Rockets"
                onClick={(sel) => setSelection(sel)}
                />

                <NavElement
                linkText="Landing Pads"
                onClick={(sel) => setSelection(sel)}
                />

                <NavElement
                linkText="Launch Pads"
                onClick={(sel) => setSelection(sel)}
                />

                <NavElement
                linkText="Missions"
                onClick={(sel) => setSelection(sel)}
                />
                
                <NavElement
                linkText="History"
                onClick={(sel) => setSelection(sel)}
                />

            </NavBar>
            {selection === 'home' && <Home />}
            {selection === 'Rockets' && <Rockets />}
            {selection === 'Landing Pads' && <MapContainer />}
            {selection === 'Missions' && <Missions />}
        </div>
    );
}
