import React, {Component} from 'react'
import {Accordion, Icon} from 'semantic-ui-react'

export default class AccordionHome extends Component {
    state = {activeIndex: 0};

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex })
    };

    render() {
        const {activeIndex} = this.state;

        return (
            <Accordion fluid styled>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    What is a food desert?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>
                        A food desert is an area where residents have very
                        limited or no access to affordable healthy foods.
                    </p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown'/>
                    How do you know if you're in a food desert?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>
                        If you are in a food desert, you will likely struggle
                        to find healthy foods like fruits, vegetables, and whole
                        grains. Food deserts often have convenience stores and
                        gas stations instead of regular grocery stores.
                    </p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    How many people are affected by food deserts?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <p>
                        Studies show up to 20% of Americans live in food
                        deserts. Nearly 2 million Georgia residents,
                        including about 500,000 children, live in food deserts,
                        according to an <a
                        href="https://investigations.ajc.com/fooddeserts/">
                        <em>Atlanta Journal-Constitution</em> investigation</a>.
                    </p>
                </Accordion.Content>
            </Accordion>
        )
    }
}
