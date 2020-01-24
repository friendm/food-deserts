import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionHome extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

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
                        A food desert is...
                    </p>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    How do you know you're in a food desert?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>
                        You have a lack of fresh, healthy foods readily available to you.
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
                        Studies show.....
                    </p>
                    <p>
                        Up to 20% of Americans live in food deserts!
                    </p>
                </Accordion.Content>
            </Accordion>
        )
    }
}
