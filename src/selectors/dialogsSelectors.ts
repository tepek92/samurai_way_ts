import {createSelector} from "reselect";
import {StateType} from "../redux/store";
import {DialogType, MessageType} from "../redux/dialogsReducer";

const getDialogsHelper = (state: StateType): DialogType[] => {
    return state.dialogsPage.dialogs;
}

export const getDialogs = createSelector(getDialogsHelper, (dialogs: DialogType[]): DialogType[] => {
    return dialogs;
})

const getMessagesHelper = (state: StateType): MessageType[] => {
    return state.dialogsPage.messages;
}

export const getMessages = createSelector(getMessagesHelper, (messages: MessageType[]): MessageType[] => {
    return messages;
})