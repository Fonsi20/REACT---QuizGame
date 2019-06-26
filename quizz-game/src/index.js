import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './App';
import reducer from './reducers/index';

const rootEl = document.getElementById('root');
const store = createStore(reducer);
console.log(store.getState());

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);

render();
store.subscribe(render);
