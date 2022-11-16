export type AllActionsType =
    ReturnType<typeof ACToggleSubscribe> |
    ReturnType<typeof ACSetUsers> |
    ReturnType<typeof ACChangeCurrentPage> |
    ReturnType<typeof ACSetTotalUsersCount>;

type PhotosUserType = {
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

const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    currentPage: 3,
    totalUsersCount: 100
};
export type UsersPageType = typeof initialState;


export const usersReducer = (state: UsersPageType = initialState, action: AllActionsType): UsersPageType => {
    switch(action.type) {
        case 'TOGGLE-SUBSCRIBE':
            return {...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed}: u)}
        case 'SET-USERS':
            return {...state, users: action.users}
        case "CHANGE-CURRENT-PAGE":
            return {...state, currentPage: action.page}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.count}
        default: return state;
    }
}

export const ACToggleSubscribe = (userId: number) => ({type: 'TOGGLE-SUBSCRIBE', userId} as const);
export const ACSetUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const);
export const ACChangeCurrentPage = (page: number) => ({type: 'CHANGE-CURRENT-PAGE', page} as const);
export const ACSetTotalUsersCount = (count: number) => ({type: 'SET-TOTAL-USERS-COUNT', count} as const);

