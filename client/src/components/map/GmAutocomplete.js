import React from "react";

class GmAutocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            query: ""
        }
    }

    handleScriptLoad = () => {
        // Declare Options For Autocomplete 
        const options = {types: ["(cities)"]};

        // Initialize Google Autocomplete 
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("autocomplete"),
            options);
        // Avoid paying for data that you don't need by restricting the 
        // set of place fields that are returned to just the address
        // components and formatted address
        this.autocomplete.setFields(['address_components',
            'formatted_address']);
        // Fire Event when a suggested name is selected
        this.autocomplete.addListener("place_changed",
            this.handlePlaceSelect);
    };

    handlePlaceSelect = () => {

        // Extract City From Address Object
        const addressObject = this.autocomplete.getPlace();
        const address = addressObject.address_components;

        // Check if address is valid
        if (address) {
            // Set State
            this.setState(
                {
                    city: address[0].long_name,
                    query: addressObject.formatted_address,
                }
            );
        }
    };

    render() {
        return <div>
            <p>Where are you located?</p>
            <input id="autocomplete" type="text"/>
        </div>;
    }
}

GmAutocomplete.propTypes = {};

export default GmAutocomplete;
