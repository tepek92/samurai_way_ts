import React, {HTMLInputTypeAttribute, JSXElementConstructor, ReactChild, ReactElement} from 'react';
import {WrappedFieldProps} from "redux-form";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export type FormControllerType = WrappedFieldProps & {
  placeholder?: string
  type?: HTMLInputTypeAttribute
  autoFocus?: boolean
  Element: JSXElementConstructor<any>
  multiline?: boolean
}

export function FormController(props: FormControllerType) {
  const {meta, placeholder, type, multiline} = props;

  const {
    input: {value, onChange}
  } = props

  const hasError = meta.error && meta.touched;

  if(type === 'checkbox') {
    return <FormControlLabel
      label={placeholder}
      control={
        <Checkbox
          checked={!!value}
          onChange={(e) => onChange(e.currentTarget.checked)}
        />}
    />
  }

  return (
    <TextField
      label={placeholder}
      placeholder={placeholder}
      type={type}
      size='small'
      multiline={multiline}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      sx={{width: '100%'}}
      error={hasError}
      helperText={hasError && meta.error}
    />

  )
}
