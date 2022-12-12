import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {FormDataSenderType, SenderFormWithFom} from "./SenderMessage/SenderMessage";
import {DialogType, MessageType} from "../../redux/dialogsReducer";

export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    onClickHandler: (messageText: string) => void
}

export function Dialogs(props: DialogsPropsType) {
    const {dialogs, messages, onClickHandler} = props;

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
            <div className={style.content}>
                <div className={style.dialogs}>{dialogsElement}</div>
                <div className={style.messages}>
                    <div>{messagesElement}</div>
                    <SenderFormWithFom onSubmit={onSubmit}/>
                </div>
            </div>
    );
}
