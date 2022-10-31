import {store} from './redux/store'
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);

rerenderEntireTree();