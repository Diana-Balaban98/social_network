import React from 'react';
import './App.css';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {ProfileActionsType} from "./redux/profile-reducer";
import {DialogsActionsType} from "./redux/dialogs-reducer";
import {StateType} from "./redux/store";


type AppPropsType = {
    state: StateType
    dispatch(action: ProfileActionsType | DialogsActionsType): void
}

const App = ({state, dispatch}: AppPropsType) => {
    const {profilePage, dialogsPage} = state

    const dialogsComponent = () => <Dialogs
        dialogsPage={dialogsPage}
        dispatch={dispatch}
    />

    const profileComponent = () => <Profile
        profilePage={profilePage}
        dispatch={dispatch}/>

    const newsComponent = () => <News/>
    const musicComponent = () => <Music/>
    const settingsComponent = () => <Settings/>

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={state.sidebar}/>
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
