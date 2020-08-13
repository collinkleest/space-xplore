import React from 'react';
import './RocketCard.sass';

export default function RocketStats(props) {
    const engines = props.rocket.engines;
    return (
        <div className="details-wrapper">

            <h3 className="details-heading">
                My Demensions
            </h3>


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


            {/* <strong> Engine Stats: </strong>
            <ul>
                {Object.keys(engines).map((engine, index) => {
                    return (
                        <li key={index}>
                            {engine}
                        </li>);
                }
                )}
            </ul>

            <p>
                <strong> Landing Legs: </strong> <br />
                <strong> Number:  </strong> {props.rocket.landing_legs.number} <br />
                <strong> Material: </strong> {props.rocket.landing_legs.material}
            </p>

            <a href={props.rocket.wikipedia}>
                {props.rocket.wikipedia}
            </a> */}
        </div>
    )
} 