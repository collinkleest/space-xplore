import React from "react";
import "./Launches.sass";

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
    <div className="modal">
      <div className="card-wrapper">
        <span className="modal-close" onClick={props.onClose}>
          &times;
        </span>
        <h1 className="modal-title">{props.launch.mission_name}</h1>
        <div className="img-container">
          {!_.isEmpty(imgArray) &&
            imgArray.map((image, index) => {
              return <img src={image} key={index} className="card-img"></img>;
            })}
        </div>
        <p>
          <strong>Details:</strong>
          {props.launch.details}
        </p>
        <p>
          <strong>Date: </strong>
          {new Date(props.launch.event_date_utc).toDateString()}
        </p>
        <h3>
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
        <p>
          <b> Cores: </b>
        </p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}
