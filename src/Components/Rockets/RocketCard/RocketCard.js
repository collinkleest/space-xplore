import React from 'react';
import CardTitle from './CardTitle';
import RocketStats from './RocketStats';
import CardImages from './CardImages';
import './RocketCard.sass';
import RocketDetails from './RocketDetails';

export default function RocketCard(props) {
    return (
        <div className="rocker-card-wrapper">
            <CardTitle name={props.rocket.rocket_name}
            />
            <CardImages
                images={props.images}
            />
            <div className="stats-container">
                <RocketDetails rocket={props.rocket} />
                <RocketStats
                    rocket={props.rocket}
                />
            </div>
            <h2 className="cost">
                <strong>$</strong>
                {props.rocket.cost_per_launch}
            </h2>
        </div >
    )
}