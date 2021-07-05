import React from 'react';
import ReactDOM from 'react-dom'
//import {rise} from 'risejs';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppContainer from './AppContainer'
import allReducers from './reducers'
import {initialState} from './state'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'react-treeview/react-treeview.css'
import 'react-datepicker/dist/react-datepicker.css'
//import './index.css'

// const log = require('electron-log');
const store = createStore(allReducers, initialState)

// log.info('Start');

//window.onload = () => {
//rise.on('ready', () => {
        console.log('Rise started');
        ReactDOM.render(
          <Provider store={store}>
            <AppContainer />
          </Provider>, 
          document.getElementById('app')
        );
//});
//};
