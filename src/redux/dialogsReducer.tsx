import {v1} from "uuid";
import {AllActionType, DialogsPageType, MessageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: AllActionType) => {

    const newState: DialogsPageType = {
        ...state,
        messages: [...state.messages]
    }

    switch (action.type) {
        case "ADD-MESSAGE":
            if (newState.textMessage.trim() !== '') {
                const newMessage: MessageType = {
                    id: v1(),
                    avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
                    name: "Pasha",
                    message: newState.textMessage,
                    time: "22:50",
                    sender: "owner"
                };
                newState.messages.push(newMessage);
            }
            newState.textMessage = '';
            return newState;
        case "UPDATE-TEXT-MESSAGE":
            newState.textMessage = action.newText;
            return newState;
        default: return newState;
    }

}


