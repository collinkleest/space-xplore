import React from 'react';
import CardTitle from './CardTitle';
import RocketStats from './RocketStats';
import CardImages from './CardImages';
import './RocketCard.sass';

export default function RocketCard(props){
    return(
        <div className="card-wrapper">
            <CardTitle name={props.rocket.rocket_name} 
            />
            <CardImages 
            images={props.images}
            />
            <RocketStats 
            rocket={ props.rocket }
            />
        </div>
    )
}