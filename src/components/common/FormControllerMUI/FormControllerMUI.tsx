import React, {HTMLInputTypeAttribute, JSXElementConstructor, ReactChild, ReactElement} from 'react';
import {WrappedFieldProps} from "redux-form";
import TextField from "@mui/material/TextField";

export type FormControllerType = WrappedFieldProps & {
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autoFocus?: boolean
    Element: JSXElementConstructor<any>
}

export function FormControllerMUI(props: FormControllerType) {
    const {meta, placeholder} = props;

    const {
        input: { value, onChange }
    } = props

    const hasError = meta.error && meta.touched;

    return (
        <>
            <TextField
              label={placeholder}
              placeholder={placeholder}
              size='small'
              multiline
              value={value}
              onChange={(e) => onChange(e.currentTarget.value)}
              sx={{width: '100%'}}
              error={hasError}
              helperText={hasError && meta.error}
            />
        </>
    )}
