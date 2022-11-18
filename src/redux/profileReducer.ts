import {v1} from "uuid";
import {PhotosUserType} from "./usersReducer";

type AllActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateTextPostAC> |
    ReturnType<typeof setUserProfileAC>;


export type PostType = {
    id: string
    text: string
    like: number
}
type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosUserType
}

export type ProfilePageType = typeof initialState;

const initialState = {
    posts: [
        {id: v1(), text: "Im ready learning React!", like: 78},
        {id: v1(), text: "JS is cool!", like: 34},
        {id: v1(), text: "Good day!", like: 5},
        {id: v1(), text: "Hello!", like: 1},
    ] as PostType[],
    textPost: "" as string,
    profile: {} as UserProfileType
};

export const profileReducer = (state: ProfilePageType = initialState, action: AllActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {id: v1(), text: state.textPost, like: 0}],
                textPost: ""
            };
        case "UPDATE-TEXT-POST": {
            return {...state, textPost: action.newText};
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile};
        }

        default:
            return state;
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const);
export const updateTextPostAC = (newText: string) => ({type: "UPDATE-TEXT-POST", newText} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile} as const);