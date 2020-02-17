import React, {useState} from "react";
import { Dropdown, Form, Radio } from "semantic-ui-react";
import "./css/filters.css";

function Filters(props) {
    const [value, setValue] = useState(null);
    const handleChange = (event, {value}) => setValue(value);

    const priceOptions = [
        {
            key: "$",
            text: "$",
            value: 1,
        },
        {
            key: "$$",
            text: "$$",
            value: 2,
        },
        {
            key: "$$$",
            text: "$$$",
            value: 3,
        },
    ];

    const travelOptions = [
        {
            key: "10",
            text: "10",
            value: 10,
        },
        {
            key: "20",
            text: "20",
            value: 20,
        },
        {
            key: "25",
            text: "25",
            value: 25,
        },
        {
            key: "30",
            text: "30",
            value: 30,
        },
        {
            key: "40",
            text: "40",
            value: 40,
        },
        {
            key: "+50",
            text: "+50",
            value: 50,
        },
    ];

    const transportOptions = [
        {
            key: "walking",
            text: "walk",
            value: 2,
        },
        {
            key: "car",
            text: "drive",
            value: 35,
        },
        {
            key: "public_transportation",
            text: "take the bus/train",
            value: 15,
        },
        {
            key: "biking",
            text: "bike",
            value: 6,
        },
    ];

    return (
        <div>
            <Form class="filter">
                <Form.Field>
                    I am looking to spend ___ money.
                </Form.Field>
                <Form.Field>
                    <Radio
                        label="$"
                        name="radioGroup"
                        value="$"
                        checked={value === "$"}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label="$$"
                        name="radioGroup"
                        value="$$"
                        checked={value === "$$"}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label="$$$"
                        name="radioGroup"
                        value="$$$"
                        checked={value === "that2"}
                        onChange={handleChange}
                    />
                </Form.Field>
            </Form>

            <div class="filter">
                <p> I prefer to travel ___ minutes to the grocery store </p>
                <Dropdown
                    placeholder="Select Time"
                    fluid
                    selection
                    options={travelOptions}
                />
            </div>
            <div class="filter">
                <p> I prefer to ____ to the grocery store: </p>
                <Dropdown
                    placeholder="Select Transportation"
                    fluid
                    selection
                    options={transportOptions}
                />
            </div>
        </div>
    );

}

export default Filters;