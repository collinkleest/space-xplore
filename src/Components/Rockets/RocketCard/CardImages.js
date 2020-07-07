import React from 'react';
import './RocketCard.sass';

export default function CardImages(props){
    return(
        <div className="img-container">
            {props.images.map( (image, index) => {
                return(
                    <img src={ image } key={ index } className="card-img"></img>
                )
            })}
        </div>
    )
}