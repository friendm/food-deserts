import React from 'react'
import AccordianHome from "./AccordianHome";
import {Grid, Header} from "semantic-ui-react";


class FAQ extends React.Component {
    render() {
        return (
            <Grid padded centered stackable columns={12}>
                <Grid.Row>
                    <Grid.Column width={9}>
                        <Header size={"huge"}>Frequently Asked Questions</Header>
                        <AccordianHome/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default FAQ;
