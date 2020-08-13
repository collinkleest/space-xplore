import React from 'react';
import Axios from 'axios';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            launchPads: [],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
        this.getLaunchPads = this.getLaunchPads.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    componentDidMount() {
        this.getLaunchPads();
    }

    getLaunchPads() {
        Axios.get('https://api.spacexdata.com/v3/launchpads')
            .then(res => this.setState({ launchPads: res.data }))
            .catch(err => console.log(err))
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        return (
            <Map google={this.props.google} zoom={3} onClick={this.onMapClicked} className="maps">
                {this.state.launchPads.map(lPad => {
                    return (
                        <Marker
                            key={lPad.id}
                            name={lPad.name}
                            onClick={this.onMarkerClick}
                            siteId={lPad.site_id}
                            id={lPad.id}
                            lName={lPad.location.name}
                            region={lPad.location.region}
                            successes={lPad.successful_launches}
                            attempts={lPad.attempted_launches}
                            status={lPad.status}
                            wiki={lPad.wikipedia}
                            desc={lPad.details}
                            siteName={lPad.site_name_long}
                            vehicles={lPad.vehicles_launched}
                            position={{ lat: lPad.location.latitude, lng: lPad.location.longitude }}>
                        </Marker>
                    );
                })}
                <InfoWindow
                    visible={this.state.showingInfoWindow}
                    marker={this.state.activeMarker}
                >
                    <h3> {this.state.selectedPlace.name}  </h3>
                    <p> <strong>Status: </strong> {this.state.selectedPlace.status} </p>
                    <p> <strong>ID: </strong> {this.state.selectedPlace.id} </p>
                    <p> <strong> Location: </strong> {this.state.selectedPlace.lName} , {this.state.selectedPlace.region} </p>
                    <p> <strong> Site Name: </strong> {this.state.selectedPlace.siteName} </p>
                    <p> <strong> Successful Landings: </strong> {this.state.selectedPlace.successes}  </p>
                    <p> <strong> Attempted Landings: </strong> {this.state.selectedPlace.attempts}  </p>
                    <p> <strong> Site ID: </strong> {this.state.selectedPlace.siteId}  </p>
                    <a href={this.state.selectedPlace.wiki} target="_blank"> Wikipedia</a>
                    <p><strong>Description:</strong></p>
                    <p> {this.state.selectedPlace.desc} </p>
                    <p><strong>Vehicles Launched: </strong> {this.state.selectedPlace.vehicles} </p>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.GOOGLE_API_KEY)
})(MapContainer)