import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkType} from "./store";

export type AuthActionsType =
  ReturnType<typeof setAuthUserAC> |
  ReturnType<typeof deleteAuthUserAC> |
  ReturnType<typeof getCaptchaUrlAC>;


// export type AuthType = typeof initialState;
export type AuthStateType = {
  userId: null | number,
  email: null | string,
  login: null | string,
  isAuth: boolean,
  captchaUrl: null | string,
}

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
  switch (action.type) {
    case "SET-AUTH-USER":
      return {...state, ...action.payload, isAuth: true}
    case "DELETE-AUTH-USER":
      return {...state, userId: null, login: null, email: null, isAuth: false}
    case "SET-CAPTCHA-URL":
      return {...state, ...action.payload}
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

export const getCaptchaUrlAC = (captchaUrl: string) => ({
  type: "SET-CAPTCHA-URL",
  payload: {captchaUrl}
} as const);

export const getAuthMeThunkCreator = () => async (dispatch: Dispatch) => {
  const data = await authAPI.getAuthMe()
  if (data.resultCode === 0) {
    const {id, email, login} = data.data
    dispatch(setAuthUserAC(id, email, login));
  }
}

export const setLoginMeThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType =>
  async (dispatch: Dispatch) => {
    const data = await authAPI.setLoginMe(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
      const data = await authAPI.getAuthMe()
      if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setAuthUserAC(id, email, login))
        dispatch(getCaptchaUrlAC(data.url))
      }
    } else {
      if(data.resultCode === 10) {
        const data = await securityAPI.getCaptchaUrl()
        dispatch(getCaptchaUrlAC(data.url))
      }
      const message = data.messages[0].length > 0 ? data.messages[0] : 'Some error'
      dispatch(stopSubmit("login", {_error: message}))
    }
  }

export const deleteLoginMeThunkCreator = (): ThunkType =>
  async (dispatch: Dispatch) => {
    const data = await authAPI.deleteLoginMe()
    if (data.resultCode === 0) {
      dispatch(deleteAuthUserAC())
    }
  }
