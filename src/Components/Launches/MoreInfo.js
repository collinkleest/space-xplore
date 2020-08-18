/** @format */

import React from "react";
import "./Launches.sass";
import PropTypes from "prop-types";

export default function MoreInfo(props) {
  let rocket = props.launch.rocket;
  let imgArray = [];

  if (_.isEmpty(props.launch.links.flickr_images) === false) {
    props.launch.links.flickr_images.map((img) => {
      imgArray.push(img);
    });
  }

  console.log(imgArray);

  return (
    <div className="launches-modal-wrapper">
      <span className="modal-close" onClick={props.onClose}>
        &times;
      </span>
      <h1 className="modal-title">{props.launch.mission_name}</h1>
      <hr className="modal-line" />
      <div className="d-flex flex-wrap">
        {!_.isEmpty(imgArray) &&
          imgArray.map((image, index) => {
            return <img src={image} key={index} className="modal-img"></img>;
          })}
      </div>
      <hr className="modal-line" />
      <h1 className="display-4 text-center">
        About {props.launch.mission_name}
      </h1>
      <p>{props.launch.details}</p>
      <p>
        <strong>Date: </strong>
        {new Date(props.launch.launch_date_utc).toDateString()}
      </p>
      <h3 className="display-4 text-center">
        <b>Rocket: </b>
      </h3>
      <p>
        <b>Rocket ID: </b>
        {rocket.rocket_id} <br />
        <b>Rocket Name: </b>
        {rocket.rocket_name} <br />
        <b>Rokcet Type: </b>
        {rocket.rocket_type} <br />
      </p>
      <div onClick={props.onClose}>
        <button className="btn btn-dark">Close</button>
      </div>
    </div>
  );
}

MoreInfo.propTypes = { launch: PropTypes.object, onClose: PropTypes.func };
