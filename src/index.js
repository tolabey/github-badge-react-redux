import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./css/index.css"
import App from './containers/App';
import {Provider} from "react-redux"
import {createStore} from "redux"
import allReducers from "./reducers/index.js"


const store = createStore(allReducers);

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>, 

    document.getElementById('root')

);
