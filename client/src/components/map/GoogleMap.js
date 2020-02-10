import React from "react";
import GoogleMapReact from "google-map-react";


function GoogleMap(props) {
    return <div style={{height: "100vh", width: "100%"}}>
        <GoogleMapReact
            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
            defaultZoom={8}
            defaultCenter={{lat: 0, lng: 0}}
        >
        </GoogleMapReact>
    </div>;
}

export default GoogleMap;
