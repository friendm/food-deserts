import React from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import {Input, List, Loader} from "semantic-ui-react";

class AutocompleteV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {address: '', latLng: {}, savedAddress: ''};
    }

    handleChange = address => {
        this.setState({address});
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => {
                this.setState({
                    savedAddress: address.formatted_address
                });
                console.log("cl", address, results[0]);
                return getLatLng(results[0]);
            })
            .then(latLng => this.setState({latLng}))
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
                            <Input
                                {...getInputProps({
                                    placeholder: 'Search places',
                                })}
                            />
                            <List celled className="autocomplete-dropdown-container">
                                {loading && <Loader active inline="centered" content="Fetching locations..."/>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? {backgroundColor: '#fafafa', cursor: 'pointer'}
                                        : {backgroundColor: '#ffffff', cursor: 'pointer'};
                                    console.log(suggestion);
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

export default AutocompleteV2;
