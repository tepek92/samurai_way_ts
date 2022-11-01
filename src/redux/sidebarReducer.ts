import {v1} from "uuid";
import {AllActionType} from "./store";

export type BestFriendsType = {
    id: string
    name: string
    avatar: string
}
export type SideBarType = typeof initialState


const initialState = {
    bestFriends: [
        {id: v1(), name: "Tom", avatar: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"},
        {id: v1(), name: "Masha", avatar: "https://android-obzor.com/wp-content/uploads/2022/02/7-1.jpg"},
        {id: v1(), name: "Mustag", avatar: "https://games.mail.ru/pre_xl_resize/hotbox/content_files//gallery/2020/12/11/74cbc80bf27b42fc9db919d9cb008aa6.jpg"},
    ] as BestFriendsType[],
}

export const sidebarReducer = (state: SideBarType = initialState, action: AllActionType): SideBarType  => {
    return state
}