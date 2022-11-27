import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"

export type StateType = ReturnType<typeof rootReducers>
export type StoreType = typeof store;

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

// applyMiddleware(thunkMiddleware)