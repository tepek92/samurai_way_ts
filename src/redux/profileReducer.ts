import {v1} from "uuid";
import {PhotosUserType} from "./usersReducer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

type AllActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateTextPostAC> |
    ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof setUserStatusAC>;


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
    profile: {} as UserProfileType,
    status: "" as string
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
        case "SET-STATUS-PROFILE": {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const);
export const updateTextPostAC = (newText: string) => ({type: "UPDATE-TEXT-POST", newText} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile} as const);
export const setUserStatusAC = (status: string) => ({type: "SET-STATUS-PROFILE", status} as const);


export const getProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data));
            });
    }
}

export const getUserStatusThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatusAC(data));
            });
    }
}

export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setUserStatusAC(status));
                }
            });
    }
}