import {v1} from "uuid";
import {PhotosUserType} from "./usersReducer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {reset} from "redux-form";
import {ThunkType} from "./store";

export type ProfileActionsType =
    ReturnType<typeof addPostAC> |
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
    profile: {} as UserProfileType,
    status: "" as string
};

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {id: v1(), text: action.postText, like: 0}],
            };
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

export const addPostAC = (postText: string) => ({type: "ADD-POST", postText} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile} as const);
export const setUserStatusAC = (status: string) => ({type: "SET-STATUS-PROFILE", status} as const);

export const addPostTC = (postText: string): ThunkType => {
    return (dispatch: Dispatch) => {
        dispatch(addPostAC(postText));
        dispatch(reset('posts'));
    }
}


export const getProfileThunkCreator = (userId: string): ThunkType => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data));
            });
    }
}

export const getUserStatusThunkCreator = (userId: string): ThunkType => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatusAC(data));
            });
    }
}

export const updateUserStatusThunkCreator = (status: string): ThunkType => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setUserStatusAC(status));
                }
            });
    }
}