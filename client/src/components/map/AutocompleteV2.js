import React from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import {Form, Input, List, Loader} from "semantic-ui-react";
import {compose, withProps} from "recompose";
import {withScriptjs} from "react-google-maps";

class AutocompleteV2Internal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {address: '', latLng: {}, savedAddress: ''};
    }

    handleChange = address => {
        this.setState({address});
    };

    handleSelect = address => {
        this.props.onWaitingForGeocode(true);
        geocodeByAddress(address)
            .then(results => {
                this.props.saveAddress(address);
                return getLatLng(results[0]);
            })
            .then(latLng => {
                this.setState({latLng});
                this.props.onSelect(latLng);
            })
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <>
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
                                        placeholder: "Start typing an address for suggestions...",
                                        icon: "search",
                                        fluid: true,
                                        size: "massive"
                                    })}

                                />
                            </Form>
                            <List celled className="autocomplete-dropdown-container">
                                <Loader active={loading} inline="centered" content="Fetching locations..."/>
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                        : {backgroundColor: '#ffffff', cursor: 'pointer'};
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
            </>
        );
    }
}

const AutocompleteV2 = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`,
        loadingElement: (<Loader active inline="centered" content="Please wait..."/>),
        containerElement: <div
            style={{minHeight: "400px", height: "500px", maxHeight: "100px", minWidth: '500px', maxWidth: "800px"}}/>,
        mapElement: <div style={{height: '100%'}}/>,
    }),
    withScriptjs
)(AutocompleteV2Internal);

export default AutocompleteV2;
