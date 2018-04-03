import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {createStore} from "redux"
import allReducer from "./reducers/index"


const store = createStore(allReducer);

const render = () => {
    ReactDOM.render(
        <App store={store}/>, document.getElementById('root')
    );
};

store.subscribe(render);
render();
