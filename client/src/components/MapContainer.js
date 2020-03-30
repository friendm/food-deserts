import React from "react";
import GoogleMap from "./map/GoogleMap";
import Filters from "./filters/Filters.js";
import "./map/style.css";

class MapContainer extends React.Component {
    render() {
        return (
            <div class="outer">
                <h1>Map</h1>
                <GoogleMap/>
                <Filters/>
            </div>
        );
    }
}

export default MapContainer;
