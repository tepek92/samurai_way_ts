import React, {Component} from 'react';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {StateType} from "./redux/store";
import {connect} from "react-redux";
import {initializedAppSuccessTC} from "./redux/appReducer";
import {compose} from "redux";
import {Preloader} from "./components/common/Preloader/Preloader";

type AppPropsType = MapState & MapDispatch;

class App extends Component<AppPropsType> {
    componentDidMount() {
            this.props.initializedApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    {/*<Navbar sidebar={store.getState().sidebar}/>*/}
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/news"} component={News}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/settings"} component={Settings}/>
                        <Route path={"/login"} component={LoginContainer}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

type MapState = {
    initialized: boolean
}
const mapStateToProps = (state: StateType): MapState => ({
    initialized: state.app.initialized
});

type MapDispatch = {
    initializedApp: () => void
}

export const AppContainer = compose(
    // withRouter,
    connect(mapStateToProps, {initializedApp: initializedAppSuccessTC})
)(App);



