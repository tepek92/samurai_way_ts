import {followAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

type AllActionsType =
    ReturnType<typeof toggleSubscribeAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof changeCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC> |
    ReturnType<typeof toggleIsFetchingAC> |
    ReturnType<typeof toggleIsFollowingAC>;

export type PhotosUserType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    name: string
    uniqueUrlName: string
    status: string
    followed: boolean
    photos: PhotosUserType
}

type FollowingUserType = number[]
const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 100,
    isFetching: false,
    isFollowing: [] as FollowingUserType
};
export type UsersPageType = typeof initialState;


export const usersReducer = (state: UsersPageType = initialState, action: AllActionsType): UsersPageType => {
    switch (action.type) {
        case 'TOGGLE-SUBSCRIBE':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case "CHANGE-CURRENT-PAGE":
            return {...state, currentPage: action.page}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING":
            return action.isFollowing
                ? {...state, isFollowing: [...state.isFollowing, action.userId]}
                : {...state, isFollowing: state.isFollowing.filter(u => u !== action.userId)}
        default:
            return state;
    }
}


export const toggleSubscribeAC = (userId: number) => ({type: 'TOGGLE-SUBSCRIBE', userId} as const);
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const);
export const changeCurrentPageAC = (page: number) => ({type: 'CHANGE-CURRENT-PAGE', page} as const);
export const setTotalUsersCountAC = (count: number) => ({type: 'SET-TOTAL-USERS-COUNT', count} as const);
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const);
export const toggleIsFollowingAC = (userId: number, isFollowing: boolean) => ({
    type: 'TOGGLE-IS-FOLLOWING',
    userId,
    isFollowing
} as const);


export const getUsersThunkCreator = (page: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(setUsersAC(data.items));
                dispatch(setTotalUsersCountAC(data.totalCount));
                dispatch(toggleIsFetchingAC(false));
            })
    }
}

export const subscribeToggleThunkCreator = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingAC(userId, true));
        followAPI.getFollow(userId)
            .then(data => {
                if (data) {
                    followAPI.deleteFollow(userId)
                        .then(data => {
                            if (data.resultCode === 0) {
                                dispatch(toggleSubscribeAC(userId));
                            }
                            dispatch(toggleIsFollowingAC(userId, false));
                        })
                } else {
                    followAPI.postFollow(userId)
                        .then(data => {
                            if (data.resultCode === 0) {
                                dispatch(toggleSubscribeAC(userId));
                            }
                            dispatch(toggleIsFollowingAC(userId, false));

                        })
                }
            })
    }
}
