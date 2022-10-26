import React, {ChangeEvent} from 'react';
import style from './SenderMessage.module.css';
import {ACAddMessage, ACUpdateTextMessage, AllActionType} from "../../../redux/state";

type SenderMessagePropsType = {
    textMessage: string
    dispatch: (action: AllActionType) => void
}


export function SenderMessage(props: SenderMessagePropsType) {
    const {textMessage, dispatch} = props;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(ACUpdateTextMessage(e.currentTarget.value));
    const onClickHandler = () => dispatch(ACAddMessage());

    return (
        <div className={style.content}>
            <div><textarea onChange={onChangeHandler} value={textMessage} className={style.sender}></textarea></div>
            <div><button onClick={onClickHandler} className={style.button}>ADD</button></div>
        </div>
    );
}
