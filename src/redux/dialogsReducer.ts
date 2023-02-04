import {v1} from "uuid";
import {Dispatch} from "redux";
import {reset} from "redux-form";
import {ThunkType} from "./store";

export type DialogsActionsType =
  ReturnType<typeof addMessageAC>;

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
    {
      id: v1(),
      name: "Viktor",
      avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
    },
    {id: v1(), name: "Masha", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/7-1.jpg"},
    {id: v1(), name: "Tom", avatar: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"},
    {
      id: v1(),
      name: "Mystag",
      avatar: "https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/74cbc80bf27b42fc9db919d9cb008aa6.jpg"
    },
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
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
  switch (action.type) {
    case "ADD-MESSAGE":
      const newMessage: MessageType = {
        id: v1(),
        avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
        name: "Pasha",
        message: action.messageText,
        time: "22:50",
        sender: "owner"
      };
      return {...state, messages: [...state.messages, newMessage]};
    default:
      return state;
  }

}

export const addMessageAC = (messageText: string) => ({type: "ADD-MESSAGE", messageText} as const);

export const addMessageTC = (messageText: string): ThunkType =>
  (dispatch: Dispatch) => {
    dispatch(addMessageAC(messageText));
    dispatch(reset('dialogs'));

  }

