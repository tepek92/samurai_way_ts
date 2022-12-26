import {ProfileActionsType, profileReducer} from "./profileReducer";
import {DialogsActionsType, dialogsReducer} from "./dialogsReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {SidebarActionsType, sidebarReducer} from "./sidebarReducer";
import {UserActionsType, usersReducer} from "./usersReducer";
import {AuthActionsType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import {AppActionsType, appReducer} from "./appReducer";


export type StateType = ReturnType<typeof rootReducers>
export type StoreType = typeof store;

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export type AllAppActionType =
    | AuthActionsType
    | UserActionsType
    | SidebarActionsType
    | ProfileActionsType
    | DialogsActionsType
    | AppActionsType;

export type ThunkType =  ThunkAction<void, StateType, null, AllAppActionType>;
export type DispatchType = ThunkDispatch<StateType, void, AllAppActionType>

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

// applyMiddleware(thunkMiddleware)