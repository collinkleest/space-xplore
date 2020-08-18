/** @format */

import React from "react";
import "./Missions.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

export default function MissionCard(props) {
  return (
    <div className="card-wrapper">
      <h1 className="mission-title"> {props.mission.mission_name} </h1>
      <p>
        <b>Mission ID: </b> {props.mission.mission_id}
      </p>
      <p className="desc"> {props.mission.description} </p>
      <p>
        <b> Manufacturers: </b>
      </p>
      <ul>
        {props.mission.manufacturers.map((company, index) => {
          return <li key={index}>{company}</li>;
        })}
      </ul>
      <p>
        <b> Payload ID List: </b>
      </p>
      <ul>
        {props.mission.payload_ids.map((pID, index) => {
          return <li key={index}> {pID}</li>;
        })}
      </ul>
      <a className="icon-link" target="_blank" href={props.mission.wikipedia}>
        <FontAwesomeIcon className="icon" icon={faWikipediaW} />
      </a>
      <a className="icon-link" target="_blank" href={props.mission.website}>
        <FontAwesomeIcon className="icon" icon={faRocket} />
      </a>
      <a className="icon-link" target="_blank" href={props.mission.twitter}>
        <FontAwesomeIcon className="icon" icon={faTwitter} />
      </a>
    </div>
  );
}
MissionCard.propTypes = { mission: PropTypes.object };
