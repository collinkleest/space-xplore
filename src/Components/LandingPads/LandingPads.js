import React from 'react';
import MapContainer from './MapContainer';
import Axios from 'axios';

class LandingPads extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            landing_pads: []
        }
        this.getLandingPads = this.getLandingPads.bind(this);
    }

    componentDidMount(){
        this.getLandingPads();
        
    }   

    getLandingPads(){
        Axios.get('https://api.spacexdata.com/v3/landpads')
        .then((res) => {
            console.log(res.data);
            this.setState({landing_pads: res.data})
        })
        .catch( (error) => { console.log(error) } )
    }
    
    render(){
        return(
            <MapContainer landingPads={this.state.landing_pads} />
        );
    }
}

export default LandingPads;