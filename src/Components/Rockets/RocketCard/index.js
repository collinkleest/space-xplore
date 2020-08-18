import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './RocketCard.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';

const RocketDetails = (props) => {
    return (
        <Fragment>
            <div className="d-flex">
                <div className="row">
                    <div className="col">
                        <h4 className="display-4">About {props.rocket.rocket_name}</h4>
                        <hr />
                        <div className="text-left">
                            <p>{props.rocket.description}</p>
                            <p><b>{props.rocket.success_rate_pct}% </b> Successful</p>
                            <p><b>First Flight: </b>{props.rocket.first_flight}</p>
                            <p><b>Country:</b> {props.rocket.country}</p>
                            <p><b>Owner: </b>{props.rocket.company} </p>
                            <p><b>Cost: </b>$ {props.rocket.cost_per_launch}</p>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className="display-4">{props.rocket.rocket_name} Dimensions</h4>
                        <hr />
                        <div className="text-left">
                            <div className="row">
                                <div className="col">
                                    <p><b>Height:</b></p>
                                    <ul>
                                        <li>{props.rocket.height.meters} Meters </li>
                                        <li>{props.rocket.height.feet} Feet</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <p><b>Diameter</b></p>
                                    <ul>
                                        <li>{props.rocket.diameter.meters} Meters</li>
                                        <li>{props.rocket.diameter.feet} Feet</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <p><b>Mass</b></p>
                                    <ul>
                                        <li>{props.rocket.mass.kg} KilaGrams</li>
                                        <li>{props.rocket.mass.lb} Pounds</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
RocketDetails.propTypes = { rocket: PropTypes.object };

const EngineDetails = (props) => {
    return (
        <Fragment>
            <h1 className="display-4">Engine Details</h1>
            <hr />
            <div className="row ">
                <div className="col text-left">
                    <p><b>ISP</b></p>
                    <ul>
                        <li>Sea Level: {props.rocket.engines.isp.sea_level} </li>
                        <li>Vacuum: {props.rocket.engines.isp.vacuum}</li>
                    </ul>
                </div>
                <div className="col text-left">
                    <p><b>Propellants</b></p>
                    <ul>
                        <li>{props.rocket.engines.propellant_1} </li>
                        <li>{props.rocket.engines.propellant_2}</li>
                    </ul>
                </div>
                <div className="col text-left">
                    <p><b>Thrust Sea Level</b></p>
                    <ul>
                        <li>{props.rocket.engines.thrust_sea_level.kN} kN</li>
                        <li>{props.rocket.engines.thrust_sea_level.lbf} lbf</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
EngineDetails.propTypes = { rocket: PropTypes.object }

const RocketCard = (props) => {
    return (
        <Fragment>
            <div className="contianer bg-white m-4 p-3 text-center rounded shadow-lg" >
                <h1 className="display-4">{props.rocket.rocket_name}</h1>
                <hr />
                <div className="d-flex justify-content-center flex-wrap">
                    {
                        props.images.map((img) => {
                            return (
                                <div key={img}>
                                    <img className="img-fluid rocket-image m-2" src={img} />
                                </div>
                            );
                        })
                    }
                </div>
                <RocketDetails rocket={props.rocket} />
                <EngineDetails rocket={props.rocket} />
                <div className="text-left">
                    <a href={props.rocket.wikipedia} className="wikipedia-link">
                        <FontAwesomeIcon icon={faWikipediaW} size="3x" />
                    </a>
                </div>
            </div>
        </Fragment>
    )
}
RocketCard.propTypes = { images: PropTypes.arrayOf(PropTypes.string), rocket: PropTypes.object }

export default RocketCard;