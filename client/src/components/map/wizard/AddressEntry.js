import React, {useState} from "react";
import AutocompleteV2 from "../AutocompleteV2";
import {Button, Header, Loader} from "semantic-ui-react";

function AddressEntry(props) {
    const [location, setLocation] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(false);

    function handleSelect(val) {
        setLocation(val);
        setLoadingLocation(false);
    }

    return (
        <div>
            <Header textAlign={"center"} size={"large"}>Enter in your address or neighborhood to get started</Header>
            <AutocompleteV2 onWaitingForGeocode={setLoadingLocation} onSelect={handleSelect}/>
            <Loader active={loadingLocation} inline="centered" content="Fetching address information..."/>
            {location && location.lat && <Button primary size="large" onClick={props.nextStep}>Continue</Button>}
        </div>
    );
}


export default AddressEntry;
