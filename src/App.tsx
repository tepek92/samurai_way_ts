import React, {Component, lazy, Suspense} from 'react';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {StateType} from "./redux/store";
import {connect} from "react-redux";
import {initializedAppSuccessTC} from "./redux/appReducer";
import {compose} from "redux";
import {Preloader} from "./components/common/Preloader/Preloader";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {Error404} from "./components/Error404/Error404";

const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer')
    .then(({DialogsContainer}) => ({default: DialogsContainer})),
);
const UsersContainer = lazy(() =>
  import('./components/Users/UsersContainer')
    .then(({UsersContainer}) => ({default: UsersContainer})),
);

type AppPropsType = MapState & MapDispatch;

class App extends Component<AppPropsType> {
  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <HashRouter>
        <Box sx={{flexGrow: 1, background: '#f9f9f9', height: '100vh'}}>
          <HeaderContainer/>
          <Grid container spacing={2}>
            {/*<Grid xs={12}>*/}
            {/*  <HeaderContainer/>*/}
            {/*</Grid>*/}
            <Grid xs={12}>

              <Suspense fallback={<Preloader/>}>
                <Switch>
                  <Route exact path="/" render={() => <Redirect to='/profile'/>}/>
                  <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                  <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                  <Route path="/users" render={() => <UsersContainer/>}/>
                  <Route path="/login" render={() => <LoginContainer/>}/>
                  <Route path="*" render={() => <Error404/>}/>
                </Switch>
              </Suspense>
            </Grid>
          </Grid>
        </Box>
      </HashRouter>
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



