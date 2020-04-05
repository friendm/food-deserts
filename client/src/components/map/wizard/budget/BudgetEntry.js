import React from "react";
import WizardStep from "../WizardStep";
import {Image} from "semantic-ui-react";
import PriceLowest from "../img/budget/price_lowest.png";
import PriceMiddle from "../img/budget/price_middle.png";
import PriceHighest from "../img/budget/price_highest.png";
import Choices, {ChoiceEntry} from "../choices/Choices";
import {updateBudget} from "../../../../redux/reducers";
import {connect} from "react-redux";


function BudgetEntry(props) {
    const choices = [new ChoiceEntry("$", PriceLowest),
        new ChoiceEntry("$$", PriceMiddle),
        new ChoiceEntry("$$$", PriceHighest)].map(choice => {
        return {
            key: choice.key,
            value: choice.value,
            content: <div>
                <Image src={choice.img}/>
                <p className="choice-text">{choice.text}</p>
            </div>
        };
    });

    return (
        <WizardStep header="How much money do you want to spend on groceries?"
                    hideBackBtn
                    hideNextBtn={!props.budget}
                    previousStep={props.previousStep}
                    nextStep={props.nextStep}
        >
            <Choices choices={choices} maxSelections={1} selectionHandler={props.setBudget}/>
        </WizardStep>
    );
}

const mapStateToProps = state => {
    return {
        budget: state.budget
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setBudget: budget => {
            dispatch(updateBudget(budget));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetEntry);
