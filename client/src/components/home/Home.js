import React from "react";
import {Button, Grid, Header, Image} from "semantic-ui-react";

import "./style.css";

import MapCarrot from "./img/map_carrot.png";
import MapConfused from "./img/map_confused.png";
import Veggies from "./img/veggies_thinking.png";

function Home(props) {
    return (
        <Grid columns={"2"} verticalAlign={"middle"} textAlign={"center"} stackable>
            <Grid.Row className="hero">
                <Grid.Column>
                    <Header>Do I live in a food desert?</Header>
                </Grid.Column>
                <Grid.Column><Image className="hero-img" src={MapCarrot}/></Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column><Image className="home-img" src={Veggies}/></Grid.Column>
                <Grid.Column>
                    <Header size={"large"} className="home-section-header">What is a food desert?</Header>
                    <p className="home-text">A food desert is an area where residents cannot easily access fresh,
                        healthy food.</p>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
                <Grid.Column>
                    <Header size={"large"} className="home-section-header">Why do food deserts exist?</Header>
                    <p className="home-text">When stores that sell cheap, healthy food are too far from a community, it
                        can be difficult for residents to buy the food they need.</p>
                </Grid.Column>
                <Grid.Column><Image className="home-img" src={MapConfused}/></Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column as={Header} size={"large"}>Am I living in a food desert?</Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column as={Header} size={"large"}><Button>Find out now</Button></Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

Home.propTypes = {};

export default Home;
