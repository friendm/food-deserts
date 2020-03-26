import React from "react";
import {Header, Segment} from "semantic-ui-react";

function WizardStep(props) {
    return (
        <Segment vertical>
            <Header textAlign={"center"} size={"large"}>{props.header}</Header>
            {props.children}
        </Segment>
    );
}

export default WizardStep;
