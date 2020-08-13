import React from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faReddit, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import './History.sass';

class History extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            history: []
        }
        this.getHistory = this.getHistory.bind(this)
    }

    componentDidMount() {
        this.getHistory();
    }

    getHistory() {
        Axios.get('https://api.spacexdata.com/v3/history')
            .then((res) => {
                this.setState({ history: res.data });
            })
            .catch((error) => { console.log(error) })
    }

    render() {

        return (
            <div className="main-wrapper">
                {this.state.history.map((his) => {
                    return (
                        <div key={his.id} className="card-wrapper">
                            <h1> {his.title} </h1>
                            <p> <strong><FontAwesomeIcon icon={faCalendar} /></strong> {new Date(his.event_date_utc).toDateString()} </p>
                            <p> <strong>Flight Number: </strong> {his.flight_number} </p>
                            <p><strong>Details: </strong></p>
                            <p>{his.details}</p>
                            <a className="icon-link" target="_blank" href={his.links.article}>
                                <FontAwesomeIcon className="icon" icon={faNewspaper} />
                            </a>
                            <a className="icon-link" target="_blank" href={his.links.reddit}>
                                <FontAwesomeIcon className="icon" icon={faReddit} />
                            </a>
                            <a className="icon-link" target="_blank" href={his.links.wikipedia}>
                                <FontAwesomeIcon className="icon" icon={faWikipediaW} />
                            </a>
                        </div>
                    );
                })}
            </div>
        );
    }

}

export default History;