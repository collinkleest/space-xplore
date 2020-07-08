import React from 'react';
import Axios from 'axios';
import LaunchCard from './LaunchCard';
import './Launches.sass';


class Launches extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            launches: []
        }
        this.getLaunches = this.getLaunches.bind(this)
    }

    componentDidMount(){
        this.getLaunches();
    }

    getLaunches(){
        Axios.get('https://api.spacexdata.com/v3/launches')
        .then( (res) => this.setState({launches: res.data}) )
        .catch( (err) => console.log(err))
    }

    render(){
        return(
            <div className="launches-wrapper">
                { this.state.launches.map( (launch) => {return( <LaunchCard launch={ launch } /> )} )}
            </div>
        );
    }


}

export default Launches;