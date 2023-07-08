import {StateType, store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'))
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
