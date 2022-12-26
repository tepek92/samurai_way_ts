import {createSelector} from "reselect";
import {StateType} from "../redux/store";
import {PostType, UserProfileType} from "../redux/profileReducer";

const getProfileHelper = (state: StateType): UserProfileType => {
    return state.profilePage.profile;
}

export const getProfile = createSelector(getProfileHelper, (profile: UserProfileType): UserProfileType => {
    return profile;
})

const getStatusHelper = (state: StateType): string => {
    return state.profilePage.status;
}

export const getStatus = createSelector(getStatusHelper, (status: string): string => {
    return status;
})

const getPostsHelper = (state: StateType): PostType[] => {
    return state.profilePage.posts;
}

export const getPosts = createSelector(getPostsHelper, (posts: PostType[]): PostType[] => {
    return posts;
})

