import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    const {state} = props;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={state.sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render={() => <Profile profilePage={state.profilePage}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;