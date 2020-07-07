import React from 'react';

export default function CardTitle(props){
    return (
        <div>
            <h1 className="card-title">
                {props.name}
            </h1>
        </div>
    )
}