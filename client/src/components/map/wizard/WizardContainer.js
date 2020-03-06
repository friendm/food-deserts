import React from "react";
import "../../css/wizard.css";
import StepWizard from 'react-step-wizard';
import AddressEntry from "./AddressEntry";

function WizardContainer(props) {
    return (

        <div id="wizard-container">
            <StepWizard>
                <AddressEntry/>
                <p>This is step 2!</p>
            </StepWizard>
        </div>
    );
}

export default WizardContainer;
