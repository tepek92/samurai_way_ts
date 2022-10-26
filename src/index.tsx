import {store} from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";



export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}
store.subscribe(() => rerenderEntireTree());

rerenderEntireTree();