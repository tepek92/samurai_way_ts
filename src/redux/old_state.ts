import {v1} from "uuid";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

type DialogType = {
    id: string
    name: string
    avatar: string
};
type MessageType = {
    id: string
    avatar: string
    name: string
    message: string
    time: string
    sender: "owner" | "user"
};
type PostType = {
    id: string
    text: string
    like: number
}
type BestFriendsType = {
    id: string
    name: string
    avatar: string
}
type ProfilePageType = {
    posts: PostType[]
    textPost: string
}
type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    textMessage: string
}
type SideBarType = {
    bestFriends: BestFriendsType[]
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}


type AllActionType =
    ReturnType<typeof ACAddPost> |
    ReturnType<typeof ACUpdateTextPost> |
    ReturnType<typeof ACAddMessage> |
    ReturnType<typeof ACUpdateTextMessage>;

type StoreType = {
    _state: StateType
    getState: () => StateType
    _subscribe: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: AllActionType) => void
}

// export const old_store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), text: "Im ready learning React!", like: 78},
//                 {id: v1(), text: "JS is cool!", like: 34},
//                 {id: v1(), text: "Good day!", like: 5},
//                 {id: v1(), text: "Hello!", like: 1},
//             ],
//             textPost: ""
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: v1(), name: "Viktor", avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"},
//                 {id: v1(), name: "Masha", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/7-1.jpg"},
//                 {id: v1(), name: "Tom", avatar: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"},
//                 {id: v1(), name: "Mystag", avatar: "https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/74cbc80bf27b42fc9db919d9cb008aa6.jpg"},
//             ],
//             messages: [
//                 {
//                     id: v1(),
//                     avatar: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
//                     name: "Viktor",
//                     message: "Hi",
//                     time: "22:27",
//                     sender: "user"
//                 },
//                 {
//                     id: v1(),
//                     avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
//                     name: "Pasha",
//                     message: "Hello maaan!",
//                     time: "22:32",
//                     sender: "owner"
//                 },
//             ],
//             textMessage: '',
//         },
//         sidebar: {
//             bestFriends: [
//                 {id: v1(), name: "Tom", avatar: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"},
//                 {id: v1(), name: "Masha", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/7-1.jpg"},
//                 {id: v1(), name: "Mustag", avatar: "https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/74cbc80bf27b42fc9db919d9cb008aa6.jpg"},
//             ],
//         },
//     },
//     _subscribe() {},
//     getState() {return this._state},
//     subscribe(observer) { this._subscribe = observer},
//     dispatch(action: AllActionType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._subscribe();
//     }
// }

const ACAddPost = () => ({type: "ADD-POST"} as const);
const ACUpdateTextPost = (newText: string) => ({type: "UPDATE-TEXT-POST", newText} as const);

const ACAddMessage = () => ({type: "ADD-MESSAGE"} as const);
const ACUpdateTextMessage = (newText: string) => ({type: "UPDATE-TEXT-MESSAGE", newText} as const);