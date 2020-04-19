import React from "react";
import {Container, Dropdown, Form, Grid, Header} from "semantic-ui-react";

const templateOptions = [
    {
        key: "SW",
        text: "Social Worker",
        value: "1",
    },
    {
        key: "Doc",
        text: "Doctor",
        value: "2",
    }
];


class EmailTemp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "",
            phone: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeLast = this.handleChangeLast.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleChangeLast(e) {
        this.setState({
            lName: e.target.value
        });
    }

    handleChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    handleChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    handleChangeValue = (e, {value}) => {
        this.setState({
            val: value
        });
    };

    template(value) {
        if (value === "1") {
            return (
                <Container text>
                    <Header as='h2'>Your Email To Your Social Worker:</Header>
                    <p>
                        Hello. My name is {this.state.name ? this.state.name :
                        "_____"} {this.state.lName ? this.state.lName : "_____"
                    }.
                        I wanted to reach out to you for assistance. I currently
                        live in a food desert - I usually stay in
                        the {this.state.city ? this.state.city : "_____ "} area.
                        Given the fact that I live in a food desert, I would like
                        to find methods/places where I can get food on a regular
                        basis. I would love to speak with you about any
                        opportunities you think would be helpful for me.
                        You can contact me by phone at {this.state.phone ? this.state.phone : " _____"}.
                        <br/>
                        Thank you, <br/>
                        {this.state.name ? this.state.name :
                            "_____"} {this.state.lName ? this.state.lName :
                        "_____"}
                    </p>
                </Container>
            );
        } else if (value === "2") {
            return (
                <Container text>
                    <Header as='h2'>Your Email To Your Doctor:</Header>
                    <p>
                        Hello. My name is {this.state.name ? this.state.name :
                        "_____ "} {this.state.lName ? this.state.lName :
                        "_____"}. I wanted to reach out to you for assistance in
                        connecting with a social worker. I currently live in a
                        food desert - I usually stay in the {this.state.city ? this.state.city : "_____ "} area.
                        I would like to find methods places where I can
                        get food on a regular basis. I would love to speak with
                        you about any opportunities you think would be helpful
                        for me. You can contact me by phone at {this.state.phone ? this.state.phone : " _____"}.
                        <br/>

                        Thank you, <br/>

                        {this.state.name ? this.state.name :
                            "_____"} {this.state.lName ? this.state.lName :
                        "_____"}
                    </p>
                </Container>
            );
        } else {
            return (
                <div>
                    Please complete the information above. A message will be generated
                    for you.
                </div>
            );
        }
    }

    render() {
        return (

            <Grid className="Email" padded centered columns={12}>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <h1>Email Message Template</h1>
                        <p> Fill out the form below to make a message.</p> <br/>

                        <Dropdown
                            placeholder='Select Template'
                            fluid
                            selection
                            onChange={this.handleChangeValue}
                            options={templateOptions}
                        />
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input label="Enter Your First Name:" type="text" value={this.state.name}
                                            onChange={this.handleChange}/>
                                <Form.Input label="Enter Your Last Name:" type="text" value={this.state.lName}
                                            onChange={this.handleChangeLast}/>
                            </Form.Group>


                            <Form.Group widths="equal">
                                <Form.Input label="Enter the City You Currently Live In:" type="text"
                                            value={this.state.city}
                                            onChange={this.handleChangeCity}/>
                                <Form.Input label="Enter Your Phone Number" type="tel" value={this.state.phone}
                                            onChange={this.handleChangePhone}/>
                            </Form.Group>

                        </Form>

                        {this.template(this.state.val)}
                    </Grid.Column>
                </Grid.Row>
            </Grid>);
    }
}

export default EmailTemp;
