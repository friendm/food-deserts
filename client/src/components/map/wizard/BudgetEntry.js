import React from 'react';
import WizardStep from "./WizardStep";
import {Button, Grid, Image} from "semantic-ui-react";

import PriceLowest from "./img/price_lowest.png";
import PriceMiddle from "./img/price_middle.png";
import PriceHighest from "./img/price_highest.png";
import Choices from "./choices/Choices";
import {updateBudget} from "../../../redux/reducers";
import {connect} from "react-redux";
import cx from "classnames";

function ChoiceEntry(text, img) {
    this.text = text;
    this.img = img;
}

function BudgetEntry(props) {
    const choices = [new ChoiceEntry("$", PriceLowest),
        new ChoiceEntry("$$", PriceMiddle),
        new ChoiceEntry("$$$", PriceHighest)].map(choice => {
        return {
            key: choice.text, value: choice.text, content: <div>
                <Image src={choice.img}/>
                <p className="image-caption">{choice.text}</p>
            </div>
        }
    });

    return (
        <WizardStep header="How much money do you want to spend on groceries?">
            <Grid>
                <Choices choices={choices} selectionHandler={props.setBudget}/>
                <Grid.Row columns={3} className={cx({hidden: !props.budget})}>
                    <Grid.Column size={1}>
                        <Button primary size="large" onClick={props.nextStep}>Continue</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </WizardStep>
    );
}

const mapStateToProps = state => {
    return {
        budget: state.budget
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setBudget: budget => {
            dispatch(updateBudget(budget));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetEntry);
