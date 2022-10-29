import React, {ChangeEvent} from 'react';
import {ACAddMessage, ACUpdateTextMessage} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

export function DialogsContainer({store}: DialogsPropsType) {
    const dialogs = store.getState().dialogsPage.dialogs;
    const messages = store.getState().dialogsPage.messages;
    const textMessage = store.getState().dialogsPage.textMessage;
    const {dispatch} = store;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(ACUpdateTextMessage(e.currentTarget.value));
    const onClickHandler = () => dispatch(ACAddMessage());

    return (
        <Dialogs
            dialogs={dialogs}
            messages={messages}
            textMessage={textMessage}
            onChangeHandler={onChangeHandler}
            onClickHandler={onClickHandler}
        />
    );
}
