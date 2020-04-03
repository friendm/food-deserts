import React from 'react';
import {updatePreferredTravelTime} from "../../../../redux/reducers";
import {connect} from "react-redux";
import {Button, Grid} from "semantic-ui-react";
import Choices, {ChoiceEntry} from "../choices/Choices";
import cx from "classnames";
import WizardStep from "../WizardStep";

function choiceFn(choice) {
    return {
        key: choice.key,
        value: choice.text,
        content: <div>
            <span className="choice-text">{choice.text}</span>
        </div>
    }
}

function PreferredTravelTimeEntry(props) {
    const choices = {
        wheelchair_or_scooter: [
            new ChoiceEntry("0-5 minutes", "", 5),
            new ChoiceEntry("5-10 minutes", "", 10),
            new ChoiceEntry("10-15 minutes", "", 15),
        ],
        walking: [
            new ChoiceEntry("0-5 minutes", "", 5),
            new ChoiceEntry("5-10 minutes", "", 10),
            new ChoiceEntry("10-15 minutes", "", 15),
            new ChoiceEntry("15-30 minutes", "", 30),
        ],
        car: [
            new ChoiceEntry("0-10 minutes", "", 10),
            new ChoiceEntry("10-20 minutes", "", 20),
            new ChoiceEntry("20-30 minutes", "", 30),
            new ChoiceEntry("30-45 minutes", "", 45),
        ],
        public_transit: [
            new ChoiceEntry("0-10 minutes", "", 10),
            new ChoiceEntry("10-20 minutes", "", 20),
            new ChoiceEntry("20-30 minutes", "", 30),
            new ChoiceEntry("30-45 minutes", "", 45),
        ]
    };

    for (let key in choices) {
        if (choices.hasOwnProperty(key)) {
            choices[key] = choices[key].map(choiceFn);
        }
    }

    return (
        <WizardStep header="How long are you willing to spend getting there?">
            <Grid stackable>
                {props.preferredTransit.length === 1 &&
                <Choices maxSelections={1} choices={choices[props.preferredTransit[0]]}
                         selectionHandler={props.setPreferredTravelTime}/>}
                <Grid.Row columns={3} className={cx({hidden: !props.preferredTravelTime.length})}>
                    <Grid.Column size={2}>
                        <Button.Group>
                            <Button size="large" onClick={props.previousStep}>Back</Button>
                            <Button primary size="large" onClick={props.nextStep}>Continue</Button>
                        </Button.Group> </Grid.Column>
                </Grid.Row>
            </Grid>
        </WizardStep>
    );
}

const mapStateToProps = state => {
    return {
        preferredTransit: state.preferredTransit,
        preferredTravelTime: state.preferredTravelTime
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setPreferredTravelTime: travelTime => {
            dispatch(updatePreferredTravelTime(travelTime));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferredTravelTimeEntry);
