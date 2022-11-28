import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                {/*<Navbar sidebar={store.getState().sidebar}/>*/}
                <Navbar />
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer />}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer />}/>
                    <Route path={"/users"} render={() => <UsersContainer />}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                    <Route path={"/login"} component={Login}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;