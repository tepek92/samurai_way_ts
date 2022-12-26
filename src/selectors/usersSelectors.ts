import {createSelector} from "reselect";
import {StateType} from "../redux/store";
import {PostType, UserProfileType} from "../redux/profileReducer";
import {UserType} from "../redux/usersReducer";

const getUsersHelper = (state: StateType): UserType[] => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersHelper, (users: UserType[]): UserType[] => {
    return users;
})

const getPageSizeHelper = (state: StateType): number => {
    return state.usersPage.pageSize;
}

export const getPageSizePage = createSelector(getPageSizeHelper, (pageSize: number): number => {
    return pageSize;
})

const getCurrentPageHelper = (state: StateType): number => {
    return state.usersPage.currentPage;
}

export const getCurrentPage = createSelector(getCurrentPageHelper, (currentPage: number): number => {
    return currentPage;
})

const getTotalUsersCountHelper = (state: StateType): number => {
    return state.usersPage.totalUsersCount;
}

export const getTotalUsersCount = createSelector(getTotalUsersCountHelper, (totalUsersCount: number): number => {
    return totalUsersCount;
})

const getIsFetchingHelper = (state: StateType): boolean => {
    return state.usersPage.isFetching;
}

export const getIsFetching = createSelector(getIsFetchingHelper, (isFetching: boolean): boolean => {
    return isFetching;
})

const getIsFollowingHelper = (state: StateType): number[] => {
    return state.usersPage.isFollowing;
}

export const getIsFollowing = createSelector(getIsFollowingHelper, (isFollowing: number[]): number[] => {
    return isFollowing;
})

