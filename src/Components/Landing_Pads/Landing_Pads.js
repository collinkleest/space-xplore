import React from 'react';
import './Landing_Pads.sass';
import './MapContainer';
import { MapContainer } from './MapContainer';

export default class Landing_Pads extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <MapContainer />
        );
    }

}