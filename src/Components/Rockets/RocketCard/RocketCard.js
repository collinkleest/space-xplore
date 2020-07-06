import React from 'react';
import CardTitle from './CardTitle';
import RocketStats from './RocketStats';

export default function RocketCard(props){
    return(
        <div className="card-wrapper">
            <CardTitle name={props.rocketName} />
            <RocketStats 
            desc={ props.desc } 
            country={ props.country }
            wikipedia={ props.wikipedia }
            cost={ props.cost }
            />
        </div>
    )
}