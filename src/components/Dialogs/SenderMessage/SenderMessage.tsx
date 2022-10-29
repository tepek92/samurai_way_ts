import React, {ChangeEvent} from 'react';
import style from './SenderMessage.module.css';

type SenderMessagePropsType = {
    textMessage: string
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickHandler: () => void
}

export function SenderMessage(props: SenderMessagePropsType) {
    const {textMessage, onChangeHandler, onClickHandler} = props;

    return (
        <div className={style.content}>
            <div><textarea onChange={onChangeHandler} value={textMessage} className={style.sender}></textarea></div>
            <div><button onClick={onClickHandler} className={style.button}>ADD</button></div>
        </div>
    );
}
