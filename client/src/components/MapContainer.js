import React from "react";
import GoogleMap from "./map/GoogleMap";

class MapContainer extends React.Component {
    render() {
        return <div>
            <h1>Map</h1>
            <GoogleMap/>
        </div>;
    }
}

export default MapContainer;
