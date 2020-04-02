import React from "react";
import {Button, Grid, Header, Image} from "semantic-ui-react";

import "./style.css";

import MapCarrot from "./img/map_carrot.png";
import MapConfused from "./img/map_confused.png";
import Veggies from "./img/veggies_thinking.png";
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <Grid columns={"2"} verticalAlign={"middle"} stackable>
            {/*Hero banner*/}
            <Grid.Row className="hero">

                <Grid.Column className="info-left info">
                    <Header>Do I live in an Atlanta food desert?</Header>
                    <p className="hero-text">Scroll down to learn more about how <i className="emph"> where you live in Atlanta can affect the food you eat.</i></p>
                    <Button className="main-cta cta" as={Link} to="/map">View our map</Button>
                </Grid.Column>

                <Grid.Column className="info-right info">
                    <Image className="hero-img" src={MapCarrot}/>
                </Grid.Column>

            </Grid.Row>


            {/*Information sections*/}
            <Grid.Row columns={2} className="info-row">

                <Grid.Column className="info-left info">
                    <Image className="home-img" src={Veggies}/>
                </Grid.Column>

                <Grid.Column className="info-right info">
                    <Header size={"large"} className="home-section-header">What is a food desert?</Header>
                    <p className="home-text">A food desert is an area where residents cannot easily access fresh,
                        healthy food.</p>
                </Grid.Column>

            </Grid.Row>

            <Grid.Row columns={2} className="info-row">

                <Grid.Column className="info-left info">
                    <Header size={"large"} className="home-section-header">Why do food deserts exist?</Header>
                    <p className="home-text">When stores that sell cheap, healthy food are too far from a community, it
                        can be difficult for residents to buy the food they need.</p>
                </Grid.Column>

                <Grid.Column className="info-right info">
                    <Image className="home-img" src={MapConfused}/>
                </Grid.Column>

            </Grid.Row>


            {/*Call to action*/}
            <Grid.Row columns={1} className="cta-row full-width-row">
                <Grid.Column className="info-center info">
                    <Header size="large">Am I living in a food desert?</Header>
                    <Button className="main-cta cta" as={Link} to="/map" >Find out now</Button>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    );
}

Home.propTypes = {};

export default Home;
