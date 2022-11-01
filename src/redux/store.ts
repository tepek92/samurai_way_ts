import {ACAddPost, ACUpdateTextPost, profileReducer} from "./profileReducer";
import {ACAddMessage, ACUpdateTextMessage, dialogsReducer} from "./dialogsReducer";
import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebarReducer";
import {ACSetUsers, ACToggleSubscribe, usersReducer} from "./usersReducer";

export type AllActionType =
    ReturnType<typeof ACAddPost> |
    ReturnType<typeof ACUpdateTextPost> |
    ReturnType<typeof ACAddMessage> |
    ReturnType<typeof ACUpdateTextMessage> |
    ReturnType<typeof ACToggleSubscribe> |
    ReturnType<typeof ACSetUsers>;

export type StateType = ReturnType<typeof rootReducers>
export type StoreType = typeof store;

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
});

export const store = createStore(rootReducers);