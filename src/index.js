import React from 'react';
import ReactDOM from 'react-dom';
import {rise} from 'risejs';
import App from './app.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

const log = require('electron-log');

log.info('Start');

window.onload = () => {
    rise.on('ready', () => {
        ReactDOM.render(<App />, document.getElementById('app'));
    });
};
