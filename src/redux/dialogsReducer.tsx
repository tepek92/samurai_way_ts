import {v1} from "uuid";
import {AllActionType} from "./store";

export type DialogType = {
    id: string
    name: string
    avatar: string
};
export type MessageType = {
    id: string
    avatar: string
    name: string
    message: string
    time: string
    sender: "owner" | "user"
};
export type DialogsPageType = typeof initialState

const initialState = {
        dialogs: [
            {id: v1(), name: "Viktor", avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"},
            {id: v1(), name: "Masha", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/7-1.jpg"},
            {id: v1(), name: "Tom", avatar: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"},
            {id: v1(), name: "Mystag", avatar: "https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/74cbc80bf27b42fc9db919d9cb008aa6.jpg"},
        ] as DialogType[],
        messages: [
            {
                id: v1(),
                avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
                name: "Viktor",
                message: "Hi",
                time: "22:27",
                sender: "user"
            },
            {
                id: v1(),
                avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
                name: "Pasha",
                message: "Hello maaan!",
                time: "22:32",
                sender: "owner"
            },
        ] as MessageType[],
        textMessage: '' as string,
    };

export const dialogsReducer = (state: DialogsPageType = initialState, action: AllActionType): DialogsPageType => {

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

export const ACAddMessage = () => ({type: "ADD-MESSAGE"} as const);
export const ACUpdateTextMessage = (newText: string) => ({type: "UPDATE-TEXT-MESSAGE", newText} as const);

