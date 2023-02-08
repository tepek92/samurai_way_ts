import React, {FC} from 'react';
import style from './SenderMessage.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import {FormController} from "../../common/FormController/FormController";


export type FormDataSenderType = {
  messageText: string
}

const SenderMessage: FC<InjectedFormProps<FormDataSenderType>> =
  ({handleSubmit}) => {
  return (
    <form className={style.content} onSubmit={handleSubmit}>
      <Field
        component={FormController}
        name="messageText"
        placeholder='Enter you message'
      ></Field>
      <Button
        type="submit"
        variant="contained"
        size="small" endIcon={<SendIcon/>}
        sx={{height: '38px', width: '150px', ml: 3}}
      >
        Send
      </Button>
    </form>
  );
}

export const SenderFormWithFom = reduxForm<FormDataSenderType>({
  form: 'dialogs'
})(SenderMessage);
