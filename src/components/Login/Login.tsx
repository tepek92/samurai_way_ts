import React, {FC} from 'react';
import {connect} from "react-redux";
import {setLoginMeThunkCreator} from "../../redux/authReducer";
import {StateType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {getCaptchaUrl, getIsAuth} from "../../selectors/authSelectors";
import Paper from "@mui/material/Paper";
import style from './Login.module.css'
import {FormDataType, LoginFormWithFom} from "./LoginForm";

type PropsType = {
  setLogin: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
} & MSTPType;

const Login: FC<PropsType> = ({setLogin, isAuth, captchaUrl}) => {

  const onSubmit = (formData: FormDataType) => {
    const {login, password, rememberMe, captcha} = formData;
    setLogin(login, password, rememberMe, captcha);
  }

  return (
    isAuth
      ? <Redirect to={'/profile'}/>

      :
      <div className={style.content}>
        <Paper sx={{mt: 3}}>
          <div className={style.loginBlock}>
            <span className={style.title}>LOGIN</span>
            <div className={style.description}>
              <span>To log in get registered
              <a
                href={'https://social-network.samuraijs.com/'}
                target={'_blank'}
                rel="noreferrer"
              > here
              </a>
            </span>
              <span>or use common test account credentials:</span>
              <span><b>Email:</b> free@samuraijs.com</span>
              <span><b>Password:</b> free</span>
            </div>
            <LoginFormWithFom onSubmit={onSubmit} captchaUrl={captchaUrl}/>
          </div>
        </Paper>
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


