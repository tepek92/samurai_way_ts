import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {SenderMessage} from "./SenderMessage/SenderMessage";
import {DialogType, MessageType} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";

export type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    textMessage: string
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickHandler: () => void
    isAuth: boolean
}

export function Dialogs(props: DialogsPropsType) {
    const {dialogs, messages, textMessage, isAuth, onChangeHandler, onClickHandler} = props;

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
        isAuth
            ? <div className={style.content}>
                <div className={style.dialogs}>{dialogsElement}</div>
                <div className={style.messages}>
                    <div>{messagesElement}</div>
                    <SenderMessage textMessage={textMessage} onChangeHandler={onChangeHandler}
                                   onClickHandler={onClickHandler}/>
                </div>
            </div>
            : <Redirect to={'/login'}/>
    );
}
