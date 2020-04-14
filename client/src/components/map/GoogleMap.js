import React, {Component} from "react";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import {compose, withProps} from "recompose";
import {Loader} from "semantic-ui-react";

class GoogleMapInternal extends Component {
    render() {
        return <div style={{height: "100vh", width: "100%"}}>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: this.props.lat, lng: this.props.long}}
            >
            </GoogleMap>
        </div>;
    }


}

const CompleteMap = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`,
        loadingElement: (<Loader active inline="centered" content="Please wait..."/>),
        containerElement: <div
            style={{minHeight: "400px", height: "500px", maxHeight: "100px", minWidth: "500px", maxWidth: "800px"}}/>,
        mapElement: <div style={{height: "100%"}}/>,
    }),
    withScriptjs,
    withGoogleMap
)(GoogleMapInternal);

export default CompleteMap;
