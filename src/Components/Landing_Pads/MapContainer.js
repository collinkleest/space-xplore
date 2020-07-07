import React from 'react';
import './Landing_Pads.sass';
import Map from 'pigeon-maps';

export default class MapContainer extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
        }
    }

    render(){
        const position = [this.state.lat, this.state.lng];

        return(
            <Map center={[50.879, 4.6997]} className="map-container" zoom={12} width={1200} height={800}>
                
            </Map>
        );
    }

}

