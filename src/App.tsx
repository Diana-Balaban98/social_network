import React from 'react';
import './App.css';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Header} from "antd/es/layout/layout";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {DialogsType, MessagesType, PostsType} from "./redux/state";



type AppPropsType = {
    posts: PostsType[]
    messages: MessagesType[]
    dialogs: DialogsType[]
}

function App({posts, messages, dialogs}: AppPropsType) {
    const dialogsComponent = () => <Dialogs messages={messages} dialogs={dialogs}/>
    const profileComponent = () => <Profile posts={posts}/>
    const newsComponent = () => <News/>
    const musicComponent = () => <Music/>
    const settingsComponent = () => <Settings/>

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path='/dialogs' render={dialogsComponent}/>
                    <Route exact path='/profile' render={profileComponent}/>
                    <Route exact path='/news' render={newsComponent}/>
                    <Route exact path='/music' render={musicComponent}/>
                    <Route exact path='/settings' render={settingsComponent}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
