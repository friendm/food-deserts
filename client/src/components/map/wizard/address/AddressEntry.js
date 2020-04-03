import React, {useEffect, useState} from "react";
import AutocompleteV2 from "./AutocompleteV2";
import {Grid, Loader} from "semantic-ui-react";
import WizardStep from "../WizardStep";

function AddressEntry(props) {
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
            <Grid stackable>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <AutocompleteV2 onWaitingForGeocode={setLoadingLocation} onSelect={handleSelect}
                                        saveAddress={setAddress}/>
                        <Loader active={loadingLocation} inline="centered"
                                content="Fetching address information..."/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </WizardStep>
    );
}


export default AddressEntry;
