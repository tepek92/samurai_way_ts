import React from 'react';
import {connect} from "react-redux";
import {setLoginMeThunkCreator} from "../../redux/authReducer";
import {StateType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {getCaptchaUrl, getIsAuth} from "../../selectors/authSelectors";
import {FormDataType, LoginFormWithFom} from "./loginForm";

type PropsType = {
  setLogin: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
} & MSTPType;

const Login = (props: PropsType) => {
  const {setLogin, isAuth, captchaUrl} = props;

  const onSubmit = (formData: FormDataType) => {
    const {login, password, rememberMe, captcha} = formData;
    setLogin(login, password, rememberMe, captcha);
  }

  return (
    isAuth
      ? <Redirect to={'/profile'}/>
      : <div>
        LOGIN
        <LoginFormWithFom onSubmit={onSubmit} captchaUrl={captchaUrl}/>
      </div>
  );
}

type MSTPType = {
  isAuth: boolean
  captchaUrl: null | string
}
const mapStateToProps = (state: StateType): MSTPType => ({
  isAuth: getIsAuth(state),
  captchaUrl: getCaptchaUrl(state)
});

export const LoginContainer = connect(mapStateToProps, {setLogin: setLoginMeThunkCreator})(Login);


