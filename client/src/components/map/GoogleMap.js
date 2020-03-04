import React from "react";
import GoogleMapReact from "google-map-react";
import AutocompleteV2 from "./AutocompleteV2";


function GoogleMap(props) {
    return <div style={{height: "100vh", width: "100%"}}>
        <GoogleMapReact
            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
            defaultZoom={8}
            onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
            yesIWantToUseGoogleMapApiInternals
            defaultCenter={{lat: 0, lng: 0}}
        >

            <AutocompleteV2/>
        </GoogleMapReact>
        {window.google && "hello"}
    </div>;
}

export default GoogleMap;
