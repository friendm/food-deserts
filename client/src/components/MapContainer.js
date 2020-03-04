import React from "react";
import Filters from "./Filters.js";
import "./css/map.css";
import AutocompleteV2 from "./map/AutocompleteV2";
import {compose, withProps} from "recompose";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"
import {Grid} from "semantic-ui-react";

class MapContainerInternal extends React.Component {
    render() {
        return (

            <Grid className="outer" centered>
                <Grid.Row>
                    <Grid.Column>
                        <h1>Map</h1>
                        <GoogleMap
                            defaultZoom={8}
                            defaultCenter={{lat: -34.397, lng: 150.644}}
                        >
                            {<Marker position={{lat: -34.397, lng: 150.644}}/>}
                        </GoogleMap>
                        <AutocompleteV2/>
                        <Filters/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

const MapContainer = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`,
        loadingElement: (<p>Loading</p>),
        containerElement: <div
            style={{minHeight: "400px", height: "500px", maxHeight: "100px", minWidth: '500px', maxWidth: "800px"}}/>,
        mapElement: <div style={{height: '100%'}}/>,
    }),
    withScriptjs,
    withGoogleMap
)(MapContainerInternal);

export default MapContainer;
