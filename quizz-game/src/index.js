import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,  } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import reducer from './store/reducers';
import {initialState} from "./store/initialState";

import './index.css';

const rootEl = document.getElementById('root');
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);

render();
