import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormController} from "../common/FormController/FormController";
import {required} from "../../utils/validators/validator";
import s from "../common/FormController/FormController.module.css";

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
      <form onSubmit={handleSubmit}>
        <Field
          name="login"
          placeholder="login"
          component={FormController}
          Element="input"
          validate={[required]}
        />
        <br/>
        <Field
          name="password"
          type="password"
          placeholder="password"
          component={FormController}
          Element="input"
          validate={[required]}
        />
        <br/>
        <Field
          name="rememberMe"
          type="checkbox"
          component="input"/>
        <br/>
        <button>login</button>
        {error && <div className={s.allError}>{error}</div>}
        {captchaUrl && <div>
            <Field
                name="captcha"
                placeholder="captcha"
                component={FormController}
                Element="input"
                validate={[required]}
            />
            <div><img src={captchaUrl} alt='captcha'/></div>
        </div>}

      </form>
    );
  }

export const LoginFormWithFom = reduxForm<FormDataType, PropsType>({
  form: 'login'
})(LoginForm);
