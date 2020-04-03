import React from "react";
import {Button} from "semantic-ui-react";

function ChosenAddress({address, stepWizard}) {
    return <p><strong>Address:</strong> {address} <Button basic color="blue" className="link" href="#"
                                                          onClick={stepWizard.firstStep}>(change)</Button></p>;
}

export default ChosenAddress;
