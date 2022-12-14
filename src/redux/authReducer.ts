import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkType} from "./store";

export type AuthActionsType =
    ReturnType<typeof setAuthUserAC> |
    ReturnType<typeof deleteAuthUserAC>;


// export type AuthType = typeof initialState;
export type AuthStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case "SET-AUTH-USER":
            return {...state, ...action.payload, isAuth: true}
        case "DELETE-AUTH-USER":
            return {...state, userId: null, login: null, email: null, isAuth: false}
        default:
            return state;
    }
}

export const setAuthUserAC = (userId: number, email: string, login: string) => ({
    type: "SET-AUTH-USER",
    payload: {userId, email, login}
} as const);

export const deleteAuthUserAC = () => ({
    type: "DELETE-AUTH-USER",
} as const);

export const getAuthMeThunkCreator = () => {
    return (dispatch: Dispatch) => {
        return authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    dispatch(setAuthUserAC(id, email, login));
                }
            })
    }
}

export const setLoginMeThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch: Dispatch) => {
        authAPI.setLoginMe(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    authAPI.getAuthMe()
                        .then(data => {
                            if (data.resultCode === 0) {
                                const {id, email, login} = data.data
                                dispatch(setAuthUserAC(id, email, login));
                            }
                        })
                } else {
                    const message = data.messages[0].length > 0 ? data.messages[0] : 'Some error'
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
}

export const deleteLoginMeThunkCreator = (): ThunkType => {
    return (dispatch: Dispatch) => {
        authAPI.deleteLoginMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(deleteAuthUserAC());
                }
            })
    }
}
