import {v1} from "uuid";
import {AllActionType, ProfilePageType} from "./state";


export const profileReducer = (state: ProfilePageType, action: AllActionType ) => {
    const newState: ProfilePageType = {
        ...state,
        posts: [...state.posts]
    };

    switch (action.type) {
        case "ADD-POST":
            if (newState.textPost.trim() !== '') {
                newState.posts.push({id: v1(), text: newState.textPost, like: 0});
            }
            newState.textPost = "";
            return newState;
        case "UPDATE-TEXT-POST":
            newState.textPost = action.newText;
            return newState;
        default: return newState;
    }
}