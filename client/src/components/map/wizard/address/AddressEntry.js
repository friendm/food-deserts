import React from "react";
import AutocompleteV2 from "./AutocompleteV2";
import {Grid, Loader} from "semantic-ui-react";
import WizardStep from "../WizardStep";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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
                <Grid.Row columns={1} style={{marginBottom: 0}}>
                    <Grid.Column>
                        <AutocompleteV2 onSelect={props.nextStep}/>
                        <Loader active={loading(props.address, props.location)}
                                inline="centered"
                                content="Fetching address information..."/>
                        <small>By using this Food Desert Map tool, you are agreeing to our <Link to="/terms">Terms
                            of
                            Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</small>
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
