import React from "react";
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import {Form, Input, List, Loader} from "semantic-ui-react";
import {compose, withProps} from "recompose";
import {withScriptjs} from "react-google-maps";
import {updateAddress, updateLocation} from "../../../../redux/reducers";
import {connect} from "react-redux";

class AutocompleteV2Internal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {address: ""};
    }

    handleChange = address => {
        this.setState({address});
    };

    handleSelect = address => {
        this.props.setAddress(address);
        geocodeByAddress(address)
            .then(results => {
                return getLatLng(results[0]);
            })
            .then(latLng => {
                this.props.setLocation(latLng);
                this.props.onSelect(latLng);
                this.setState({
                    address: ""
                });
            })
            .catch(error => console.error("Error", error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div>
                        <Form autoComplete="off">
                            <Input

                                {...getInputProps({
                                    placeholder: "Type an address...",
                                    icon: "search",
                                    fluid: true,
                                    size: "massive"
                                })}

                            />
                        </Form>
                        <List celled className="autocomplete-dropdown-container">
                            <Loader active={loading} inline="centered" content="Loading..."/>
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? {backgroundColor: "#fafafa", cursor: "pointer"}
                                    : {backgroundColor: "#ffffff", cursor: "pointer"};
                                return (
                                    <List.Item
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >

                                        <List.Content>
                                            <List.Header>{suggestion.formattedSuggestion.mainText}</List.Header>
                                            {suggestion.formattedSuggestion.secondaryText}</List.Content>
                                    </List.Item>
                                );
                            })}
                        </List>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

const AutocompleteV2 = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`,
        loadingElement: (<Loader active inline="centered" content="Please wait..."/>),
        containerElement: <div
            style={{minHeight: "400px", height: "500px", maxHeight: "100px", minWidth: "500px", maxWidth: "800px"}}/>,
        mapElement: <div style={{height: "100%"}}/>,
    }),
    withScriptjs
)(AutocompleteV2Internal);

const mapStateToProps = state => {
    return {
        address: state.address,
        location: state.location
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setAddress: address => {
            dispatch(updateAddress(address));
        },
        setLocation: location => {
            dispatch(updateLocation(location));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteV2);
