import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

const log = require('electron-log');

log.info('Start');

window.onload = () => {
    ReactDOM.render(<App />, document.getElementById('app'));
};
