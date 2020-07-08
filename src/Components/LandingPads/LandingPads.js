import React from 'react';
import Axios from 'axios';
import MapContainer from './MapContainer';

class LandingPads extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            landingPads: []
        }
        this.getLandingPads = this.getLandingPads.bind(this)
    }

    componentDidMount(){
        this.getLandingPads()
    }    


    getLandingPads(){
        Axios.get('https://api.spacexdata.com/v3/landpads')
        .then( res => {this.setState({landingPads: res.data})})
        .catch (error => {console.log(error); })
    }

    render(){
        return(
             <MapContainer landingPads={this.state.landingPads} />
        );
    }

}

export default LandingPads;