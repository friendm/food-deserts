import React from "react";
import "./css/layout.css";
import "./css/module.css";
import "./css/style.css";
import CacheBuster from "./components/util/CacheBuster";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MapContainer from "./components/map/MapContainer";
import Home from "./components/home/Home";
import EmailTemp from "./components/Email/EmailTemp";
import MoreInfo from "./components/MoreInfo";
import FAQ from "./components/FAQ";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Navigation from "./components/nav/Navigation";
import {Sidebar} from "semantic-ui-react";
import {Footer} from "./components/Footer";

function App() {
    return (
        <Sidebar.Pushable as={"div"}>
            <Router>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route path="/map" component={MapContainer}/>
                        <Route path="/email" component={EmailTemp}/>
                        <Route path="/info" component={MoreInfo}/>
                        <Route path="/faq" component={FAQ}/>
                        <Route path="/terms" component={TermsOfService}/>
                        <Route path="/privacy" component={PrivacyPolicy}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
            < CacheBuster>
                {({loading, isLatestVersion, refreshCacheAndReload}) => {
                    if (loading) {
                        return null;
                    }
                    if (!loading && !isLatestVersion) {
                        // You can decide how and when you want to force reload
                        refreshCacheAndReload();
                    }
                    return null;
                }
                }
            </CacheBuster>
        </Sidebar.Pushable>
    );
}

export default App;
