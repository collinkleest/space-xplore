import React from 'react';

const RocketDetails = (props) => {
    return (
        <div className="details-wrapper">
            <h3 className="details-heading">
                About {props.rocket.rocket_name}
            </h3>
            <p>
                {props.rocket.description}
            </p>
            <p>
                <strong>Country: </strong>
                {props.rocket.country}
            </p>
            <p>
                <strong> Success Rate: </strong>
                {props.rocket.success_rate_pct}
            </p>
            <p>
                <strong> First Flight: </strong>
                {props.rocket.first_flight}
            </p>

        </div>
    )
}

export default RocketDetails;