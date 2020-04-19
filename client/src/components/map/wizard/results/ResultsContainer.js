import React, {useState} from "react";
import WizardStep from "../WizardStep";
import {connect} from "react-redux";
import {useAsyncEffect} from "use-async-effect";
import {clearStore, setReadyToCalculateResults} from "../../../../redux/reducers";
import {Card, Header, Icon, List, Loader} from "semantic-ui-react";
import CompleteMap from "../../GoogleMap";
import MarkerWithInfo from "./MarkerWithInfo";
import PlaceInfo from "./PlaceInfo";
import {ResultsMapKey} from "./ResultsMapKey";
import {Link} from "react-router-dom";

function ResultsContainer(props) {
    const [data, setData] = useState(null);
    const [headerText, setHeader] = useState("Your Results");
    const [headerColor, setHeaderColor] = useState("black");
    const [headerIcon, setHeaderIcon] = useState("");

    function beforePreviousStep() {
        setData(null);
        setHeader("Your Results");
        setHeaderColor("black");
        setHeaderIcon("");
        props.setReadyToCalculateResults(false);
        props.previousStep();
    }

    function beforeFirstStep() {
        setData(null);
        setHeader("Your Results");
        setHeaderColor("black");
        setHeaderIcon("");
        props.clearStore();
        props.firstStep();
    }

    // This is an Effect
    // What's that?  https://daveceddia.com/useeffect-hook-examples/
    useAsyncEffect((async () => {
        async function getNearbyStores() {
            const location = props.location;
            const url = `/api/v1/map/query?lat=${location.lat}&long=${location.lng}`
                + `&budget=${props.budget[0]}`
                + `&transit=${props.preferredTransit[0]}`
                + `&tt=${props.preferredTravelTime[0]}`;
            let response = await fetch(url);
            return await response.json();
        }

        if (props.readyToCalculateResults && props.location) {
            const data = await getNearbyStores();
            if (data.ok && data.results.length >= 2) {
                setHeader("Good news - you are near healthy food!");
                setHeaderColor("green");
                setHeaderIcon("check circle");
            } else if (data.ok && data.results.length < 2) {
                setHeader("You are living in a food desert");
                setHeaderIcon("exclamation circle");
                setHeaderColor("orange");
            }
            setData(data);
        }
        // The array below defines variables this Effect "depends" on.  In other words
        // you **MUST** put any variables used in the Effect that come from outside in this array
        // Common examples would include: props, state variables/setters, etc.
    }), [props, setData, setHeader, setHeaderColor, setHeaderIcon]);

    const inFoodDesert = data && data.ok && data.results.length < 2;
    return (
        <WizardStep header={<><Icon style={{display: "inline-block"}} color={headerColor} name={headerIcon}/> <span
            style={{color: headerColor === "green" ? "#21ba45" : "inherit"}}>{headerText}</span></>} hideNextBtn
                    previousStep={beforePreviousStep}
        >
            <Loader active={!data} inline="centered" content="Crunching the numbers..."/>

            {data && data.results && inFoodDesert &&
            <>
                {data.results.length === 1 &&
                <>
                    <Header>1 result found</Header>
                    <p>We looked, but we only found one source of healthy food near you.</p>
                    <Card.Group centered>
                        <PlaceInfo place={data.results[0]} key={data.results[0].id}/>
                    </Card.Group>
                </>
                }
                {data.results.length === 0 &&
                <>
                    <Header>No results found</Header>
                    <p>We looked, but we couldn’t find any sources of healthy food near you.</p>

                </>
                }

                <Header>What can I do now?</Header>
                <List size={"medium"}>
                    <List.Item>
                        <List.Icon name={"mail"}/>
                        <List.Content>
                            <List.Header as={Link} to={"/email"}>Email your doctor or social worker</List.Header>
                            <List.Description>If you're having trouble finding healthy food, your doctor or social
                                worker will be able to connect
                                you with resources or offer advice.
                            </List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name={"map"}/>
                        <List.Content>
                            <List.Header as={Link} to="/info">Learn more about food deserts</List.Header>
                            <List.Description>When stores that sell cheap, healthy food are too far from a community,
                                it can be difficult for residents to buy the food they need.
                            </List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name={"arrow alternate circle left"}/>
                        <List.Content>
                            <List.Header as={"a"} onClick={beforeFirstStep}>Try this food desert wizard
                                again</List.Header>
                            <List.Description>You may find more options for healthy food if you're able to try a
                                different method of transportation or travel for a longer period of time.
                            </List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </>

            }

            {data && data.results && data.results.length >= 2 && <>
                <Header>Top Results</Header>
                <p>Click on a place title to open it in Google Maps.</p>
                <Card.Group style={{marginBottom: "10px"}} centered>
                    {data.results.slice(0, 4).map(place =>
                        <PlaceInfo place={place} key={place.id}/>
                    )}
                </Card.Group>
                {data.results.length >= 5 && <p><Icon name="angle double down"/> Scroll down to see
                    all {data.results.length} result{data.results.length !== 1 ? "s" : ""} on the map below.</p>}
                <Header>All Results</Header>
                <p>Click a pin to see more information.</p>
                <ResultsMapKey/>
                <CompleteMap defaultZoom={10}
                             lat={props.location && props.location.lat}
                             lng={props.location && props.location.lng}
                >
                    <MarkerWithInfo position={props.location}
                                    icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                                    content={<p><Icon name={"crosshairs"}/> Your location</p>}/>

                    {data.results.length > 0 && data.results.map(place =>
                        <MarkerWithInfo key={place.id}
                                        position={{lat: place.location.lat, lng: place.location.lng}}
                                        content={<PlaceInfo inMap place={place}/>}
                        />)}
                </CompleteMap>
                {data.htmlAttributions.length > 0 && <>
                    <small>Attributions provided by Google:</small> <br/>
                    {data.htmlAttributions.map(text => <><small dangerouslySetInnerHTML={{
                        __html: text // TODO: add HTML sanitization for this on the backend, to be safe (use sanitize-html package)
                    }}/><br/></>)}
                    <br/>
                </>}
            </>}
        </WizardStep>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setReadyToCalculateResults: ready => {
            dispatch(setReadyToCalculateResults(ready));
        },
        clearStore: () => {
            dispatch(clearStore());
        }
    };
};

const mapStateToProps = state => {
    return {
        address: state.address,
        location: state.location,
        budget: state.budget,
        preferredTransit: state.preferredTransit,
        preferredTravelTime: state.preferredTravelTime,
        readyToCalculateResults: state.readyToCalculateResults
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
