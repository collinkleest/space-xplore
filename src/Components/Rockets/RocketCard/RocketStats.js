import React from 'react';
import './RocketCard.sass';

export default function RocketStats(props){
    const engines = props.rocket.engines; 
    return(
        <div className="stats-container">
            <p>
                <strong>Description: </strong>
                {props.rocket.description}
            </p>
            <p>
                <strong>Country: </strong>
                {props.rocket.country}
            </p>
            <p>
                <strong>Cost: </strong>
                $ {props.rocket.cost_per_launch}
            </p>

            <p>
                <strong> Success Rate: </strong>
                {props.rocket.success_rate_pct}
            </p>
            <p>
                <strong> First Flight: </strong>
                {props.rocket.first_flight}
            </p>

            <p>
                <strong>Height: </strong>
                {props.rocket.height.feet} ft ({props.rocket.height.meters} meters)
            </p>

            <p>
                <strong> Diameter: </strong>
                {props.rocket.diameter.feet} ft ({props.rocket.diameter.meters} meters)
            </p>
            
            <p>
                <strong> Mass: </strong>
                {props.rocket.mass.lb} lbs ({props.rocket.mass.kg} kgs)
            </p>
            
            
            <strong> Engine Stats: </strong> 
            <ul>
                {Object.keys(engines).map((engine, index) => {
                    return (
                    <li key={index}>
                        {engine} 
                    </li>);}
                )}
            </ul>

            <p>
                <strong> Landing Legs: </strong> <br />
                    <strong> Number:  </strong> {props.rocket.landing_legs.number} <br />
                    <strong> Material: </strong> {props.rocket.landing_legs.material}
            </p>

            <a href={ props.rocket.wikipedia }>
                {props.rocket.wikipedia}
            </a>
        </div>
    )
} 