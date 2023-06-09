import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, StateType, updateNewMessageText, addMessage} from "./redux/state";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            updateNewMessageText={updateNewMessageText}
            addMessage={addMessage}
        />,
        document.getElementById('root')
    );
}


