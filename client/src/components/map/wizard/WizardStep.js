import React from "react";
import {Button, Grid, Header, Segment} from "semantic-ui-react";

function WizardStep({header, hideBackBtn, hideNextBtn, previousStep, nextStep, children}) {
    return (
        <Segment vertical>
            <Header textAlign={"center"} size={"large"}>{header}</Header>
            {children}
            {(!hideBackBtn || !hideNextBtn) && <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column size={1}>
                        {!hideBackBtn && <Button size="large" onClick={previousStep}>Back</Button>}
                    </Grid.Column>
                    <Grid.Column textAlign="right" size={1}>
                        {!hideNextBtn && <Button primary size="large" onClick={nextStep}>Continue</Button>}
                    </Grid.Column>
                </Grid.Row>
            </Grid>}
        </Segment>
    );
}

export default WizardStep;
