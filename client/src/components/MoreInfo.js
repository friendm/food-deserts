import React from "react";
import {Grid, Header, List, Segment} from "semantic-ui-react";

const MoreInfo = () => (
    <Grid centered padded columns={12}>
        <Grid.Row>
            <Grid.Column width={8}>
                <Segment>
                    <Header size={"huge"}>Information About Food Deserts</Header>
                </Segment>
                <Segment color="green">
                    <Header>What is the official definition of a food desert?</Header>
                    <p>The USDA’s formal definition of food security stresses
                        "ready availability of nutritionally adequate and safe foods”
                        that can be obtained in socially acceptable ways. The concept
                        of a food desert is used to highlight how food insecurity affects
                        people along the lines of community and geography.</p>
                    <Header>Problems related to current solutions for food deserts</Header>
                    <List bulleted>
                        <List.Item>Educational materials regarding food security and food justice
                            are often lackluster, lacking in readability level and
                            cultural relevance.</List.Item>
                        <List.Item>Ineffective food security interventions can end up becoming
                            another barrier to food security.</List.Item>
                        <List.Item>Food assistance programs alone have not been effective
                            because they do not address the problem of food insecurity
                            at the level of its most widely agreed upon cause: poverty.</List.Item>
                    </List>
                    <Header>What is the breadth of food insecurity?</Header>
                    <p>People at the highest risk include low-income women and
                        low-income communities, communities of color, young mothers,
                        the elderly, immigrants, poor rural families, and children.</p>
                    <Header>What Are The Effects Of Food Insecurity?</Header>
                    <List bulleted>
                        <List.Item>People living in food deserts are also more likely to be
                            living in poverty and facing significant barriers to accessing
                            quality healthcare, education, and employment.</List.Item>
                        <List.Item>Food insecurity directly causes physical health problems because
                            malnutrition decimates immunity to diseases and toxic substances.</List.Item>
                        <List.Item>The damage of food insecurity is compounded for children and
                            the elderly. Both have a critical need for balanced nutrition.</List.Item>
                    </List>
                </Segment>
                <Segment>
                    <Header size={"huge"}>Information About The Team</Header>
                </Segment>
                <Segment color="green">
                    <p>This web app was created by Georgia Tech Junior Design team 9353. The team consists
                        of several members, including Olivia Amyette, Hannah Li, Seong Ryoo, and Evan Strat. All are
                        computer science undergraduate students at Georgia Tech.</p>
                    <p>Hannah Li and Evan Strat partnered to develop the frontend and
                        backend. Olivia Amyette and Seong Ryoo partnered to develop the
                        User Interface and styling.</p>
                    <p>The team hopes to help as many people living in Atlanta food
                        deserts as possible with this web app.</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default MoreInfo;
