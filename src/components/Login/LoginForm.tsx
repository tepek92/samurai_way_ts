import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import {FormController} from "../common/FormController/FormController";
import Button from "@mui/material/Button";
import style from './Login.module.css'

export type FormDataType = {
  login: string
  password: string
  rememberMe: boolean
  captcha: null | string
}

type PropsType = {
  captchaUrl: null | string
}

const LoginForm: FC<PropsType & InjectedFormProps<FormDataType, PropsType>> =
  ({handleSubmit, error, captchaUrl}) => {
    return (
      <form onSubmit={handleSubmit} className={style.form}>

        <div className={style.field}>
          <Field
            name='login'
            placeholder='Login'
            component={FormController}
            validate={[required]}
          />
        </div>
        <div className={style.field}>
          <Field
            name='password'
            type='password'
            placeholder='Password'
            component={FormController}
            validate={[required]}
          />
        </div>
        <div className={style.field}>
          <Field
            type="checkbox"
            name={'rememberMe'}
            placeholder={'Remember Me'}
            component={FormController}
          />
        </div>

        {error && <div className={style.allError}>{error}</div>}

        {captchaUrl && <div className={style.captcha}>
            <Field
                name='captcha'
                placeholder='Captcha'
                component={FormController}
                validate={[required]}
            />
            <img src={captchaUrl} alt='captcha'/>
        </div>}

          <Button
            type="submit"
            sx={{mt: 2}}
            variant="contained"
          >
            LOGIN
          </Button>
      </form>
    );
  }

export const LoginFormWithFom = reduxForm<FormDataType, PropsType>({
  form: 'login'
})(LoginForm);
