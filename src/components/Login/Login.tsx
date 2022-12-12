import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setLoginMeThunkCreator} from "../../redux/authReducer";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type PropsType = {
    setLogin: (email: string, password: string, rememberMe: boolean) => void
}

function Login(props: PropsType) {
    const {setLogin} = props;

    const onSubmit = (formData: FormDataType) => {
        const {login, password, rememberMe} = formData;
        console.log(formData);
        setLogin(login, password, rememberMe);
    }

    return (
        <div>
            LOGIN
            <LoginFormWithFom onSubmit={onSubmit}/>
        </div>
    );
}

// =====================

function LoginForm(props: InjectedFormProps<FormDataType>) {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="login" placeholder="login" component="input"/>
            <br/>
            <Field name="password" type="password" placeholder="password" component="input"/>
            <br/>
            <Field name="rememberMe" type="checkbox" component="input"/>
            <br/>
            <button>login</button>
        </form>
    );
}

const LoginFormWithFom = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);


export const LoginContainer = connect(null, {setLogin: setLoginMeThunkCreator})(Login)


