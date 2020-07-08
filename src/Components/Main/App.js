import React from 'react';
import NavElement from '../Nav/NavElement/NavElement';
import NavBar from '../Nav/NavBar/NavBar';
import Home from './Home';
import Rockets from '../Rockets/Rockets';
import Missions from '../Missons/Missions';
import LandingPads from '../LandingPads/LandingPads';
import History from '../History/History';
import MapContainer from '../LaunchPads/MapContainer';

export default function App(){
    
    const [selection, setSelection] = React.useState('home');
    
    return(
        <div>
            <NavBar onClick={(sel) => setSelection(sel)}> 
            
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
            {selection === 'Missions' && <Missions />}
            {selection === 'Landing Pads' && <LandingPads />}
            {selection === 'Launch Pads' && <MapContainer />}
            {selection === 'History' && <History />}
        </div>
    );
}
