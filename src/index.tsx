import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, state, updateNewPostText} from "./redux/state";


ReactDOM.render(
    <App state={state}
         addPost={addPost}
         updateNewPostText={updateNewPostText}
         updateNewMessageText={updateNewPostText}
         addMessage={addMessage}
    />,
    document.getElementById('root')
);