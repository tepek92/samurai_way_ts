import {v1} from "uuid";
import {AllActionType} from "./store";

export {}

export type UsersPageType = typeof initialState;
export type UserType = {
    id: string,
    name: string,
    status: string,
    location: {country: string, city: string},
    subscribe: boolean,
    avatar: string,
}

const initialState = {
    users: [] as UserType[],
};

export const usersReducer = (state: UsersPageType = initialState, action: AllActionType): UsersPageType => {
    switch(action.type) {
        case 'TOGGLE-SUBSCRIBE':
            return {...state,
                users: state.users.map(u => u.id === action.userId ? {...u, subscribe: !u.subscribe}: u)}
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default: return state;
    }
}

export const ACToggleSubscribe = (userId: string) => ({type: 'TOGGLE-SUBSCRIBE', userId} as const);
export const ACSetUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const);