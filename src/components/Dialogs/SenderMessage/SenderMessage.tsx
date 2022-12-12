import React from 'react';
import style from './SenderMessage.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormDataSenderType = {
    messageText: string
}

function SenderMessage(props: InjectedFormProps<FormDataSenderType>) {
    const {handleSubmit} = props;
    return (
        <form className={style.content} onSubmit={handleSubmit}>
            <div>
                <Field
                    name="messageText"
                    component="textarea"
                    className={style.sender}>

                </Field>
            </div>
            <div>
                <button className={style.button}>
                    ADD
                </button>
            </div>
        </form>
    );
}

export const SenderFormWithFom = reduxForm<FormDataSenderType>({
    form: 'dialogs'
})(SenderMessage);
