import React from "react";
import CompleteMap from "./map/GoogleMap";
import Filters from "./filters/Filters.js";

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
        this.lat = 33.7490;
        this.long = -84.3880;
    }

    async getNearbyStores() {
        let temp = `/api/v1/map/query?lat=${this.lat}&long=${this.long}`;
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
            <div className="outer">
                <button onClick={() => this.getNearby()}> Click me</button>
                <h1>Map</h1>
                <CompleteMap lat={this.lat} long={this.long}/>
                <Filters/>
            </div>
        );
    }
}

export default MapContainer;
