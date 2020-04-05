import React from "react";
import "./style.css";
import {Grid} from "semantic-ui-react";
import WizardContainer from "./wizard/WizardContainer";

class MapContainer extends React.Component {
    render() {
        return (
            <Grid className="outer" centered>
                <Grid.Row>
                    <Grid.Column>
                        <WizardContainer/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default MapContainer;
