import React, {useState} from "react";
import StepWizard from "react-step-wizard";
import AddressEntry from "./address/AddressEntry";
import ChosenAddress from "./address/ChosenAddress";
import {Header, Image, Segment} from "semantic-ui-react";
import BudgetEntry from "./budget/BudgetEntry";
import PreferredTransitEntry from "./transit/PreferredTransitEntry";
import PreferredTravelTime from "./transit/PreferredTravelTime";
import {connect} from "react-redux";
import "./wizard.css";

import ResultsContainer from "./results/ResultsContainer";
import PoweredByGoogle from "./img/powered_by_google_on_white.png";

function WizardContainer({address}) {
    const [instance, setInstance] = useState();

    return <div>
        <Header size="huge" textAlign={"center"}>Do you live in a food desert?</Header>
        <div id="wizard-container">
            {address && instance &&
            <Segment vertical><ChosenAddress stepWizard={instance}/></Segment>}
            <StepWizard instance={setInstance}>
                <AddressEntry/>
                <BudgetEntry/>
                <PreferredTransitEntry/>
                <PreferredTravelTime/>
                <ResultsContainer/>
            </StepWizard>
            <Image style={{marginTop: "5px"}} src={PoweredByGoogle}/>
        </div>
    </div>
        ;
}

const mapStateToProps = state => {
    return {
        address: state.address
    };
};

export default connect(mapStateToProps)(WizardContainer);
