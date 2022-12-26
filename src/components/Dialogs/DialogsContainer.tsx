import {ComponentType} from 'react';
import {addMessageTC, DialogType, MessageType} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StateType} from "../../redux/store";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRedirect} from "../../hok/withRedirect";
import {getDialogs, getMessages} from "../../selectors/dialogsSelectors";

export type MSTPDialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

const mapStateToProps = (state: StateType): MSTPDialogsType => ({
    dialogs: getDialogs(state),
    messages: getMessages(state),
});


export const DialogsContainer = compose<ComponentType>(withRedirect, connect(mapStateToProps, {onClickHandler: addMessageTC}))(Dialogs);