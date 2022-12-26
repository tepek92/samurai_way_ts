import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setLoginMeThunkCreator} from "../../redux/authReducer";
import {FormController} from "../common/FormController/FormController";
import {required} from "../../utils/valodators/validator";
import {StateType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import s from "../common/FormController/FormController.module.css"
import {getIsAuth} from "../../selectors/authSelectors";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type PropsType = {
    setLogin: (email: string, password: string, rememberMe: boolean) => void
} & MSTPType;

function Login(props: PropsType) {
    const {setLogin, isAuth} = props;

    const onSubmit = (formData: FormDataType) => {
        const {login, password, rememberMe} = formData;
        setLogin(login, password, rememberMe);
    }

    return (
        isAuth
            ? <Redirect to={'/profile'}/>
            : <div>
                LOGIN
                <LoginFormWithFom onSubmit={onSubmit}/>
            </div>
    );
}

// =====================
function LoginForm(props: InjectedFormProps<FormDataType>) {
    const {handleSubmit, error} = props;
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
        </form>
    );
}

const LoginFormWithFom = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);


type MSTPType = {
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MSTPType => ({
    isAuth: getIsAuth(state)
});

export const LoginContainer = connect(mapStateToProps, {setLogin: setLoginMeThunkCreator})(Login);


