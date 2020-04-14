import React from "react";
import CacheBuster from "./components/util/CacheBuster";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MapContainer from "./components/MapContainer";
import Home from "./components/home/Home";
import EmailTemp from "./components/EmailTemp";
import MoreInfo from "./components/MoreInfo";
import FAQ from "./components/FAQ";
import Navigation from "./components/nav/Navigation";
import {Sidebar} from "semantic-ui-react";

function App() {
    return (
        <Sidebar.Pushable as={"div"} style={{
            margin: "0 auto",
            minHeight: "100vh" // We need the page height to match the screen/window height so the mobile
            // hamburger menu appears correctly.  This method of doing that is from https://github.com/ctrlplusb/react-sizeme/issues/111#issuecomment-295166102
        }}>
        <Router>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route path="/map" component={MapContainer}/>
                        <Route path="/email" component={EmailTemp}/>
                        <Route path="/info" component={MoreInfo}/>
                        <Route path="/faq" component={FAQ}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>
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
