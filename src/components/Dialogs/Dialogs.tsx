import React, {FC} from 'react';
import style from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {FormDataSenderType, SenderFormWithFom} from "./SenderMessage/SenderMessage";
import {DialogType, MessageType} from "../../redux/dialogsReducer";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export type DialogsPropsType = {
  dialogs: DialogType[]
  messages: MessageType[]
  onClickHandler: (messageText: string) => void
}

export const Dialogs: FC<DialogsPropsType> =
  ({dialogs, messages, onClickHandler}) =>
  {
    const onSubmit = (formData: FormDataSenderType) => {
      const {messageText} = formData;
      onClickHandler(messageText);
    }

    const dialogsElement = dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name} avatar={d.avatar}/>);
    const messagesElement = messages.map(m => {
      return (
        <Message
          key={m.id}
          avatar={m.avatar}
          name={m.name}
          message={m.message}
          time={m.time}
          sender={m.sender}/>
      );
    });

    return (
      <Box sx={{flexGrow: 1}}>
        <div className={style.content}>
          <Paper sx={{mt: 4}}>
            <div className={style.dialogs}>{dialogsElement}</div>
          </Paper>

          <Paper sx={{mt: 3}}>
            <div className={style.messages}>
              <div>{messagesElement}</div>
              <SenderFormWithFom onSubmit={onSubmit}/>
            </div>
          </Paper>
        </div>
      </Box>
    );
  }
