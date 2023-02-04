import {createSelector} from "reselect";
import {StateType} from "../redux/store";
import {DialogType, MessageType} from "../redux/dialogsReducer";

const getLoginHelper = (state: StateType): string | null => {
    return state.auth.login;
}

export const getLogin = createSelector(getLoginHelper, (login: string | null ): string | null  => {
    return login;
})

const getIsAuthHelper = (state: StateType): boolean => {
    return state.auth.isAuth;
}

export const getIsAuth = createSelector(getIsAuthHelper, (isAuth: boolean): boolean => {
    return isAuth;
})

const getUserLoginIdHelper = (state: StateType): number | null => {
    return state.auth.userId;
}

export const getUserLoginId = createSelector(getUserLoginIdHelper, (id: number | null): number | null => {
    return id;
})

const getCaptchaUrlHelper = (state: StateType): string | null => {
    return state.auth.captchaUrl;
}
export const getCaptchaUrl = createSelector(getCaptchaUrlHelper, (captchaUrl: string | null): string | null => {
    return captchaUrl;
})

