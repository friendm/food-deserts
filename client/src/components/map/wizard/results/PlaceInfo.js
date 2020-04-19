import React from "react";
import {Card, Icon} from "semantic-ui-react";
import "../style.css";
import cx from "classnames";

function PlaceInfo({place, style, inMap}) {
    return (
        <Card className={cx({"place-card": !inMap})}>
            <Card.Content>
                <Card.Header>
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href={`https://www.google.com/maps/search/?api=1&query=${place.vicinity}`
                       + `&query_place_id=${place.id}`}>{place.name}</a>&nbsp;
                    <span style={{
                        color: "gray",
                        fontSize: 14,
                        fontWeight: "normal"
                    }}>({place.distance.text})</span>
                </Card.Header>
            </Card.Content>
            <Card.Content>
                <Icon name={"map marker alternate"}/> {place.vicinity}
            </Card.Content>
            <Card.Content>
                <Icon name={"clock outline"}/> {place.duration.text}
            </Card.Content>
        </Card>
    );
}

export default PlaceInfo;
