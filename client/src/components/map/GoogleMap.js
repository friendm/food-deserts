import React, { Component} from "react";
import GoogleMapReact from "google-map-react";

class GoogleMap extends Component {
    render() {
        return <div style={{height: "100vh", width: "100%"}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                defaultZoom={8}
                defaultCenter={{lat: this.props.lat, lng: this.props.long}}
            >
            </GoogleMapReact>
        </div>;
    }


}

export default GoogleMap;
