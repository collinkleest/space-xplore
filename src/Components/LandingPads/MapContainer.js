/** @format */

import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import PropTypes from "prop-types";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render() {
    return (
      <Map
        zoom={4}
        google={this.props.google}
        className="maps"
        onClick={this.onMapClicked}
      >
        {this.props.landingPads.map((lPad) => {
          return (
            <Marker
              key={lPad.id}
              name={lPad.full_name}
              onClick={this.onMarkerClick}
              status={lPad.status}
              id={lPad.id}
              lName={lPad.location.name}
              region={lPad.location.region}
              successes={lPad.successful_landings}
              attempts={lPad.attempted_landings}
              type={lPad.landing_type}
              wiki={lPad.wikipedia}
              desc={lPad.details}
              position={{
                lat: lPad.location.latitude,
                lng: lPad.location.longitude,
              }}
            ></Marker>
          );
        })}
        <InfoWindow
          visible={this.state.showingInfoWindow}
          marker={this.state.activeMarker}
        >
          <h3> {this.state.selectedPlace.name} </h3>
          <p>
            {" "}
            <strong>Status: </strong> {this.state.selectedPlace.status}{" "}
          </p>
          <p>
            {" "}
            <strong>ID: </strong> {this.state.selectedPlace.id}{" "}
          </p>
          <p>
            {" "}
            <strong> Location: </strong> {this.state.selectedPlace.lName} ,{" "}
            {this.state.selectedPlace.region}{" "}
          </p>
          <p>
            {" "}
            <strong> Successful Landings: </strong>{" "}
            {this.state.selectedPlace.successes}{" "}
          </p>
          <p>
            {" "}
            <strong> Attempted Landings: </strong>{" "}
            {this.state.selectedPlace.attempts}{" "}
          </p>
          <p>
            {" "}
            <strong> Landing Type: </strong> {this.state.selectedPlace.type}{" "}
          </p>
          <a href={this.state.selectedPlace.wiki} target="_blank">
            {" "}
            Wikipedia
          </a>
          <p>
            <strong>Description:</strong>
          </p>
          <p> {this.state.selectedPlace.desc} </p>
        </InfoWindow>
      </Map>
    );
  }
}

MapContainer.propTypes = { landingPads: PropTypes.arrayOf(PropTypes.object) };

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
})(MapContainer);
