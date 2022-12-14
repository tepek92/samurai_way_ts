import React, {HTMLInputTypeAttribute, JSXElementConstructor, ReactChild, ReactElement} from 'react';
import s from './FormController.module.css'
import {WrappedFieldProps} from "redux-form";

type FormControllerType = WrappedFieldProps & {
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autoFocus?: boolean
    Element: JSXElementConstructor<any>
}

export function FormController(props: FormControllerType) {
    const {Element, input, meta, ...restProps} = props;

    const hasError = meta.error && meta.touched;
    const styleInput = hasError ? s.inputError : '';
    const styleSpan = hasError ? s.spanError : '';

    return (
        <>
            <Element className={styleInput} {...restProps} {...input}/>
            {hasError &&
                    <span className={styleSpan}>{meta.error}</span>
            }
        </>
    )}
