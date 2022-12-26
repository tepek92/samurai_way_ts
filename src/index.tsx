import {store} from './redux/store'
import ReactDOM from "react-dom";
import {AppContainer} from "./App";
import React from "react";
import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store = {store}>
            <AppContainer />
        </Provider>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);

rerenderEntireTree();