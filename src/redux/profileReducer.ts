import {v1} from "uuid";
import {AllActionType} from "./store";

export type PostType = {
    id: string
    text: string
    like: number
}
export type ProfilePageType = typeof initialState;

const initialState =  {
    posts: [
        {id: v1(), text: "Im ready learning React!", like: 78},
        {id: v1(), text: "JS is cool!", like: 34},
        {id: v1(), text: "Good day!", like: 5},
        {id: v1(), text: "Hello!", like: 1},
    ] as PostType[],
    textPost: "" as string
};

export const profileReducer = (state: ProfilePageType = initialState, action: AllActionType): ProfilePageType => {


    switch (action.type) {
        case "ADD-POST":
            return {...state,
                posts: [...state.posts, {id: v1(), text: state.textPost, like: 0}],
                textPost: ""}
        case "UPDATE-TEXT-POST": {
            return {...state, textPost: action.newText};
        }
        default: return state;
    }
}

export const ACAddPost = () => ({type: "ADD-POST"} as const);
export const ACUpdateTextPost = (newText: string) => ({type: "UPDATE-TEXT-POST", newText} as const);