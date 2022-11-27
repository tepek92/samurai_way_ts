import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type AllActionsType = ReturnType<typeof setAuthUserAC>;


// export type AuthType = typeof initialState;
export type AuthStateType = {
    userId: null | number,
    email: null| string,
    login: null | string,
    isAuth: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state: AuthStateType = initialState, action: AllActionsType): AuthStateType => {
    switch (action.type) {
        case "SET-AUTH-USER":
            return {...state, ...action.payload, isAuth: true}
        default:
            return state;
    }
}

export const setAuthUserAC = (userId: number, email: string, login: string) => ({type: "SET-AUTH-USER", payload: {userId, email, login}} as const);

export const getAuthMeThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    dispatch(setAuthUserAC(id, email, login));
                }
            })
    }
}
