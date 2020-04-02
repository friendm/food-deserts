import React, {useEffect, useState} from "react";
import AutocompleteV2 from "./AutocompleteV2";
import {Loader} from "semantic-ui-react";
import WizardStep from "../WizardStep";

function AddressEntry(props) {
    const [location, setLocation] = useState({});
    const [dummy, setDummy] = useState(null);
    const [address, setAddress] = useState("");
    const [loadingLocation, setLoadingLocation] = useState(false);

    useEffect(() => {
        console.log("I was called?");
    });

    async function handleSelect(val) {
        console.log("handleSelect val", val);
        const newLocationVal = {
            lat: val.lat,
            lng: val.lng
        };
        nextStep(newLocationVal, address);
    }

    function nextStep(location, address) {
        props.dataChange({
            location, address
        });
        console.log("LA", {location, address});
        props.nextStep();
    }

    return (
        <WizardStep header="Enter your address or neighborhood to get started">
            <AutocompleteV2 onWaitingForGeocode={setLoadingLocation} onSelect={handleSelect} saveAddress={setAddress}/>
            <Loader active={loadingLocation} inline="centered" content="Fetching address information..."/>
        </WizardStep>
    );
}


export default AddressEntry;
