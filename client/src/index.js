import React from 'react';
import ReactDOM from 'react-dom';

//css imports
import './components/css/index.css';

//Pages in app imports
import App from './App.js';

//Production Imports
import * as serviceWorker from './serviceWorker';
import packageJson from '../package.json';

global.appVersion = packageJson.version;


ReactDOM.render(<App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
