import React from 'react'
import style from "./Message.module.css"

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
    sender: "owner" | "user"
};

export function Message(props: MessagePropsType) {
    const {avatar, name, message, time, sender} = props;

    const styleSender = sender === "owner" ? style.owner : style.user;
    return (
        <div className={style.column_block}>
            {sender === 'owner' && <img className={style.avatar} src={avatar} alt={""}/>}
            <div className={style.message_block  + ' ' + styleSender}>
                <div className={style.name}>{name}</div>
                <div className={style.text}>{message}</div>
                <div className={style.time}>{time}</div>
            </div>
            {sender === 'user' && <img className={style.avatar} src={avatar} alt={""}/>}
        </div>
    )
}
