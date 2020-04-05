import React, {useState} from "react";
import {Grid} from "semantic-ui-react";
import Choice from "./Choice";

export function ChoiceEntry(text, img, key) {
    this.key = key ? key : text.toLowerCase().replace(/[\s/]/g, "_");
    this.text = text;
    this.img = img;
}

function Choices({choices, selectionHandler, maxSelections}) {
    const [selection, setSelection] = useState([]);
    const [selectionMade, setSelectionMade] = useState(false);

    if (!maxSelections) {
        maxSelections = choices.length;
    }

    function selectionClicked(key) {
        const existingIdx = selection.indexOf(key);
        if (existingIdx >= 0) { // If choice is already selected, deselect it
            const copy = [...selection];
            copy.splice(existingIdx, 1);
            setSelection(copy);
            if (!copy.length) {
                setSelectionMade(false);
                selectionHandler(copy);
            }
        } else {
            const currentSelection = [...selection, key];

            if (currentSelection.length > maxSelections) {
                currentSelection.splice(0, 1);
            }

            setSelection(currentSelection);
            setSelectionMade(true);
            selectionHandler(currentSelection);
        }
    }

    return (
        <Grid stackable>
            <Grid.Row centered columns={choices.length}>
                {choices.map(choice => <Grid.Column key={choice.key} textAlign="center">
                    <Choice id={choice.key} content={choice.content} selectionMade={selectionMade}
                            numSelected={selection.length} maxSelections={maxSelections}
                            selected={selection.indexOf(choice.key) >= 0} onClick={selectionClicked}/>
                </Grid.Column>)}
            </Grid.Row>
        </Grid>
    );
}

export default Choices;
