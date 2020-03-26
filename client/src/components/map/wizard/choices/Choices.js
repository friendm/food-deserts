import React, {useState} from 'react';
import {Grid} from "semantic-ui-react";
import Choice from "./Choice";

function Choices({choices, selectionHandler}) {
    const [selection, setSelection] = useState("");
    const [selectionMade, setSelectionMade] = useState(false);

    function selectionClicked(key) {
        setSelection(key);
        setSelectionMade(true);
        selectionHandler(key);
    }

    return (
        <Grid.Row centered columns={choices.length}>
            {choices.map(choice => <Grid.Column key={choice.key} textAlign="center">
                <Choice id={choice.key} content={choice.content} selectionMade={selectionMade}
                        selected={choice.key === selection} onClick={selectionClicked}/>
            </Grid.Column>)}
        </Grid.Row>
    );
}

export default Choices;
