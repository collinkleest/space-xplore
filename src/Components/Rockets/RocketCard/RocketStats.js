import React from 'react';

export default function RocketStats(props){
    return(
        <div className="stats-container">
            <p>
                <strong>Description: </strong>
                {props.desc}
            </p>
            <p>
                <strong>Country: </strong>
                {props.country}
            </p>
            <p>
                {props.wikipedia}
            </p>
            <p>
                <strong>Cost: </strong>
                {props.cost}
            </p>
        </div>
    )
} 