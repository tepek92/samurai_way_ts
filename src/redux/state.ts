import {v1} from "uuid";

export type DialogType = {
    id: string
    name: string
};
export type MessageType = {
    id: string
    avatar: string
    name: string
    message: string
    time: string
    sender: "owner" | "user"
};
export type PostType = {
    id: string
    text: string
    like: number
}

export type ProfilePageType = {
    posts: PostType[]
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), text: "Im ready learning React!", like: 78},
            {id: v1(), text: "JS is cool!", like: 34},
            {id: v1(), text: "Good day!", like: 5},
            {id: v1(), text: "Hello!", like: 1},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Viktor"},
            {id: v1(), name: "Masha"},
            {id: v1(), name: "Tom"},
            {id: v1(), name: "Mystag"},
        ],
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
        ],
    }
}