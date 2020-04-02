import React from "react";

function ChosenAddress({address, stepWizard}) {
    return <p><strong>Address:</strong> {address} <a href="#" onClick={stepWizard.firstStep}>(change)</a></p>;
}

export default ChosenAddress;
