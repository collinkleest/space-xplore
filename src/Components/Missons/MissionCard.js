import React from 'react';
import './Missions.sass';

export default function MissionCard(props){
    return(
        <div className="card-wrapper">
            <h1 className="mission-title"> { props.mission.mission_name } </h1>
            <p className="desc"> {props.mission.description} </p> 
            <p> <strong> Manufacturers: </strong></p>
            <ul> {props.mission.manufacturers.map( (company) => {return (<li>{ company }</li>) })} </ul>
            <p> <strong> Payload ID List: </strong></p>
            <ul> {props.mission.payload_ids.map( (pID) => {return (<li> { pID }</li>) })}</ul>
            <p> <a className="link" href={props.mission.wikipedia}> Wikipedia </a> </p>
            <p> <a className="link" href={props.mission.website}> Website </a> </p>
            <p> <a className="link" href={props.mission.twitter}> Twitter </a> </p>
        </div>
    );
}