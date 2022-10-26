import React from 'react';
import style from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {AllActionType, DialogsPageType} from "../../redux/state";
import {SenderMessage} from "./SenderMessage/SenderMessage";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: AllActionType) => void
}

export function Dialogs(props: DialogsPropsType) {
    const dialogs = props.dialogsPage.dialogs;
    const messages = props.dialogsPage.messages;
    const textMessage = props.dialogsPage.textMessage;
    const {dispatch} = props;

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
                <SenderMessage textMessage={textMessage} dispatch={dispatch}/>
            </div>
        </div>
    );
}
