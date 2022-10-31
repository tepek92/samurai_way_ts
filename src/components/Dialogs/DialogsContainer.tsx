import {ChangeEvent} from 'react';
import {ACAddMessage, ACUpdateTextMessage} from "../../redux/dialogsReducer";
import {Dialogs, DialogsPropsType} from "./Dialogs";
import {DispatchType, StateType} from "../../redux/store";
import {connect} from "react-redux";

const mapStateToProps = (state: StateType): Omit<DialogsPropsType, 'onChangeHandler' | 'onClickHandler'> => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    textMessage: state.dialogsPage.textMessage
});

const mapDispatchToProps = (dispatch: DispatchType): Omit<DialogsPropsType, 'dialogs' | 'messages' | 'textMessage'> => ({
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(ACUpdateTextMessage(e.currentTarget.value)),
    onClickHandler: () => dispatch(ACAddMessage())
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);