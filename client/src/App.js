import React from 'react';
import './components/css/App.css';
import CacheBuster from "./components/util/CacheBuster";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Map from "./components/map";
import Home from "./components/Home";
import EmailTemp from "./components/EmailTemp";
import MoreInfo from "./components/MoreInfo";
import FAQ from "./components/FAQ";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/map">Map</Link>
                    </li>
                    <li>
                        <Link to="/email">Email</Link>
                    </li>
                    <li>
                        <Link to="/moreinfo">More Info</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/map" component={Map} />
                    <Route exact path="/" component={Home} />
                    <Route path="/map" component={Map} />
                    <Route path="/email" component={EmailTemp} />
                    <Route path="/moreinfo" component={MoreInfo} />
                    <Route path="/faq" component={FAQ} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
