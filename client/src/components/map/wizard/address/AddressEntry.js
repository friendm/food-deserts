import React from "react";
import AutocompleteV2 from "./AutocompleteV2";
import {Grid, Loader} from "semantic-ui-react";
import WizardStep from "../WizardStep";
import {connect} from "react-redux";

function AddressEntry(props) {
    function loading(address, location) {
        if (!address) {
            return false;
        }
        return address && !location;
    }

    return (
        <WizardStep header="Enter your address or neighborhood to get started"
                    hideBackBtn hideNextBtn
        >
            <Grid stackable>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <AutocompleteV2 onSelect={props.nextStep}/>
                        <Loader active={loading(props.address, props.location)}
                                inline="centered"
                                content="Fetching address information..."/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </WizardStep>
    );
}

const mapStateToProps = state => {
    return {
        address: state.address,
        location: state.location
    };
};

export default connect(mapStateToProps)(AddressEntry);
