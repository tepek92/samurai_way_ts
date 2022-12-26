import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {getAuthMeThunkCreator, setAuthUserAC} from "./authReducer";
import {DispatchType, ThunkType} from "./store";

export type AppActionsType =
    ReturnType<typeof initializedSuccessAC>;


// export type AuthType = typeof initialState;
export type AppReducerStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false,
};

export const appReducer = (state: AppReducerStateType = initialState, action: AppActionsType): AppReducerStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
            return state;
    }
}

export const initializedSuccessAC = () => ({type: "INITIALIZED-SUCCESS"} as const);

export const initializedAppSuccessTC = (): ThunkType => {
    return (dispatch: DispatchType) => {
        const promise1 = dispatch(getAuthMeThunkCreator());
        Promise.all([promise1])
            .then(() => {
                dispatch(initializedSuccessAC());
            })
    }
}
