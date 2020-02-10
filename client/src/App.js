import React from 'react';
import './components/css/App.css';
import CacheBuster from "./components/util/CacheBuster";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import MapContainer from "./components/MapContainer";
import Home from "./components/Home";
import EmailTemp from "./components/EmailTemp";
import MoreInfo from "./components/MoreInfo";
import FAQ from "./components/FAQ";
import {List} from "semantic-ui-react";

function App() {
    return (
        <div style={{
            width: "100%",
            maxWidth: "960px",
            margin: "0 auto",
            padding: "0 5px"
        }}>
            <Router>
                <div>
                    <List bulleted>
                        <List.Item as={Link} to="/">Home</List.Item>
                        <List.Item as={Link} to="/map">Map</List.Item>
                        <List.Item as={Link} to="/email">Email</List.Item>
                        <List.Item as={Link} to="/info">More Info</List.Item>
                        <List.Item as={Link} to="/faq">FAQ</List.Item>
                    </List>
                    <Switch>
                        <Route path="/map" component={MapContainer}/>
                        <Route path="/email" component={EmailTemp}/>
                        <Route path="/info" component={MoreInfo}/>
                        <Route path="/faq" component={FAQ}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </div>
            </Router>
            <CacheBuster>
                {({loading, isLatestVersion, refreshCacheAndReload}) => {
                    if (loading) {
                        return null;
                    }
                    if (!loading && !isLatestVersion) {
                        // You can decide how and when you want to force reload
                        refreshCacheAndReload();
                    }
                    return null;
                }}
            </CacheBuster>
        </div>
    );
}

export default App;
