import {store} from './redux/store'
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider} from "./redux/storeContext";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        // <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>,
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);

rerenderEntireTree();