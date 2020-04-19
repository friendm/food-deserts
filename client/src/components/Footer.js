import {Grid, Header, List} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React from "react";
import packageJson from "../../package.json";

export function Footer() {
    return <Grid divided textAlign={"center"} centered stackable style={{
        marginTop: "25px", paddingBottom: "10px", background: "#B2E5BC"
    }}>
        <Grid.Row>
            <Grid.Column textAlign={"center"} width={4}>
                <List horizontal>
                    <List.Item as={Link} to="/terms">Terms of
                        Service</List.Item>
                    <List.Item as={Link} to="/privacy">Privacy
                        Policy</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column textAlign={"center"} width={4}>
                <Header size={"small"} content="The Food As Medicine Initiative"/>
                <p>
                    This web app was created by Georgia Tech
                    Junior Design Team 9353.
                </p>
                <p>Version {packageJson.version}</p>
            </Grid.Column>
        </Grid.Row>
    </Grid>;
}
