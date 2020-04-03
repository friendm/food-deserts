import React from "react";
import GoogleMap from "./map/GoogleMap";
import Filters from "./filters/Filters.js";
import "./map/style.css";

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        this.lat = 33.7490;
        this.long = -84.3880;
    }

    async getNearbyStores() {
        let temp = `http://localhost:9000/map/query?lat=${this.lat}"&long=${this.long}`;
        let response = await fetch(temp);
        let data = await response.json();
        this.setState({apiResponse: "got"});

        return data;
    }

    getNearby() {
        this.getNearbyStores().then(data => console.log(data));
    }

    render() {
        return (
            <div class="outer">
                <button onClick={() => this.getNearby()}> Click me</button>
                <h1>Map</h1>
                <GoogleMap lat={this.lat} long={this.long}/>
                <Filters/>
            </div>
        );
    }
}

export default MapContainer;
