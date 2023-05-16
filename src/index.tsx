import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";



ReactDOM.render(
    <App posts={state.posts} messages={state.messages} dialogs={state.dialogs}/>,
    document.getElementById('root')
);