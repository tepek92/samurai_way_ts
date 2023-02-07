import React from 'react';
import TextField from "@mui/material/TextField";

export const CustomInput = (props: any) => {
  const {
    input: { value, onChange }
  } = props

  return (
    <TextField
      id="postTex"
      placeholder='Enter you post'
      size='small'
      multiline
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      sx={{width: '100%'}}
    />
  );
};