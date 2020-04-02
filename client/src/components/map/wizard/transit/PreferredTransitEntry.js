import React from 'react';

import Car from "../img/transit/car.png";
import Wheelchair from "../img/transit/wheelchair.png";
import PublicTransit from "../img/transit/public_transportation.png";
import Walking from "../img/transit/walk.png";
import Choices, {ChoiceEntry} from "../choices/Choices";
import WizardStep from "../WizardStep";
import cx from "classnames";
import {Button, Grid, Image} from "semantic-ui-react";
import {updatePreferredTransit} from "../../../../redux/reducers";
import {connect} from "react-redux";

function PreferredTransitEntry(props) {
    const choices = [
        new ChoiceEntry("Wheelchair or Scooter", Wheelchair),
        new ChoiceEntry("Walking", Walking),
        new ChoiceEntry("Public Transit", PublicTransit),
        new ChoiceEntry("Car", Car)
    ].map(
        choice => {
            return {
                key: choice.key,
                value: choice.text,
                content: <div>
                    <Image src={choice.img}/>
                    <div className="choice-text"><p>{choice.text}</p></div>
                </div>
            }
        }
    );

    return (
        <WizardStep header="How do you want to get there?">
            <Grid>
                <Choices maxSelections={1} choices={choices} selectionHandler={props.setPreferredTransit}/>
                <Grid.Row columns={3} className={cx({hidden: !props.preferredTransit.length})}>
                    <Grid.Column size={2}>
                        <Button.Group>
                            <Button size="large" onClick={props.previousStep}>Back</Button>
                            <Button primary size="large" onClick={props.nextStep}>Continue</Button>
                        </Button.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </WizardStep>
    );
}

const mapStateToProps = state => {
    return {
        preferredTransit: state.preferredTransit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setPreferredTransit: newTransit => {
            dispatch(updatePreferredTransit(newTransit));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferredTransitEntry);
