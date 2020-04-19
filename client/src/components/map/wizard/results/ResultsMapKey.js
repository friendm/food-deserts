import {Image, List} from "semantic-ui-react";
import React from "react";

export function ResultsMapKey() {
    return <List>
        <List.Item>
            <Image avatar verticalAlign={"middle"} src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                   alt={"Blue pin"}/>
            <List.Content verticalAlign={"middle"}>Your location</List.Content>
        </List.Item>
        <List.Item>
            <Image avatar verticalAlign={"middle"} src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                   alt={"Red pin"}/>
            <List.Content verticalAlign={"middle"}>Sources of healthy food</List.Content>
        </List.Item>
    </List>;
}
