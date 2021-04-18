
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class SendLocation extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <Map google={this.props.google}
                onClick={this.onMapClicked}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyBUWE4mKgHVViKlryKminZgTTxcVZfPOUE")
})(SendLocation)
