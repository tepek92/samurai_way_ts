import {ChangeEvent} from 'react';
import {addMessageAC, updateTextMessageAC} from "../../redux/dialogsReducer";
import {Dialogs, DialogsPropsType} from "./Dialogs";
import {StateType} from "../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withRedirect} from "../../hok/withRedirect";

const mapStateToProps = (state: StateType): Omit<DialogsPropsType, 'onChangeHandler' | 'onClickHandler'> => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    textMessage: state.dialogsPage.textMessage,
});

const mapDispatchToProps = (dispatch: Dispatch): Omit<DialogsPropsType, 'dialogs' | 'messages' | 'textMessage'| 'isAuth'> => ({
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(updateTextMessageAC(e.currentTarget.value)),
    onClickHandler: () => dispatch(addMessageAC())
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirect(Dialogs));