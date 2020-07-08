import React from 'react';
import Axios from 'axios';

class History extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            history: []
        }
        this.getHistory = this.getHistory.bind(this)
    }

    componentDidMount(){
        this.getHistory();
    }

    getHistory(){
        Axios.get('https://api.spacexdata.com/v3/history')
        .then((res) => {
            this.setState({history: res.data});
        })
        .catch((error) => {console.log(error)})
    }

    render(){
        
        return(
            this.state.history.map( (his) => {
                return(
                    <div key={his.id} className="card-wrapper">
                        <h1> {his.title} </h1>
                        <p> <strong>Date: </strong> {his.event_date_utc} </p>
                        <p> <strong>Flight Number: </strong> {his.flight_number} </p>
                        <p><strong>Details: </strong></p>
                        <p>{his.details}</p>
                        <p><a href={his.links.article}> Article </a></p>
                        <p><a href={his.links.reddit}> Reddit </a></p>
                        <p><a href={his.links.wikipedia}> Wikipedia </a></p>
                    </div>
                );
            })
        );
    }   

}

export default History;