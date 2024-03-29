import {ProfileActionsType, profileReducer} from "./profileReducer";
import {DialogsActionsType, dialogsReducer} from "./dialogsReducer";
import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {UserActionsType, usersReducer} from "./usersReducer";
import {AuthActionsType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import {AppActionsType, appReducer} from "./appReducer";


// export type StateType = ReturnType<typeof rootReducers>

const rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

export type AllAppActionType =
  | AuthActionsType
  | UserActionsType
  | ProfileActionsType
  | DialogsActionsType
  | AppActionsType;

export type StateType = ReturnType<typeof store.getState>;

export type ThunkType = ThunkAction<void, StateType, unknown, AllAppActionType>;
export type DispatchType = ThunkDispatch<StateType, unknown, AllAppActionType>

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));