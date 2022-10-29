import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {AllActionType, StateType, StoreType} from "./redux/store";


type AppPropsType = {
    state: StateType
    dispatch: (action: AllActionType) => void
    store: StoreType
}

function App(props: AppPropsType) {
    const {store} = props;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar={store.getState().sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render={() => <Profile store={store}/>}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer store={store}/>}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;