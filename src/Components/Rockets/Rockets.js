import React from 'react';
import Axios from 'axios';
import RocketCard from './RocketCard/RocketCard';
import './Rockets.sass';

export default class Rockets extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            rockets: []
        }
        this.getRockets = this.getRockets.bind(this);
    }
    
    componentDidMount(){
        this.getRockets();
    }

    getRockets(){
        Axios.get('https://api.spacexdata.com/v3/rockets')
        .then( (response) => {
            this.setState({rockets: response.data});
        })
        .catch( (error) => {
            console.log(error);
        } )
    }

    render(){
        return(
            <div>
                {this.state.rockets.map(rocket => { return (
                <RocketCard 
                rocketName={rocket.rocket_name} 
                desc={ rocket.description }
                country={ rocket.country } 
                wikipedia= { rocket.wikipedia }
                cost={ rocket.cost_per_launch } />
                ); })}
            </div>
            
        )
    }

}