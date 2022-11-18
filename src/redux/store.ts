import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";

export type StateType = ReturnType<typeof rootReducers>
export type StoreType = typeof store;

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
});

export const store = createStore(rootReducers);