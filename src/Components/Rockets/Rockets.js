import React from 'react';
import Axios from 'axios';
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
        console.log(this.state.rockets);
        return(
            <div>
                Hello From Rocket
                <div>
                    {this.state.rockets.map((rocket) => {console.log(rocket.rocket_name); return (<p> {rocket.rocket_name} </p>); })}
                </div>
            </div>
            
        )
    }

}