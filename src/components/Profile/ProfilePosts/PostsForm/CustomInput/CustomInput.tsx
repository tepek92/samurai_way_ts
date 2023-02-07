import React from 'react';
import TextField from "@mui/material/TextField";
import {FormControllerType} from "../../../../common/FormControllerMUI/FormControllerMUI";

export const CustomInput = (props: FormControllerType) => {
  const {
    input: { value, onChange }
  } = props

  return (
    <TextField
      placeholder='Enter you post'
      size='small'
      multiline
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      sx={{width: '100%'}}
    />
  );
};