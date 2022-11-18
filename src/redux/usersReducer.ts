type AllActionsType =
    ReturnType<typeof toggleSubscribeAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof changeCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC> |
    ReturnType<typeof toggleIsFetchingAC>;

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

const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 100,
    isFetching: false
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
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default: return state;
    }
}


export const toggleSubscribeAC = (userId: number) => ({type: 'TOGGLE-SUBSCRIBE', userId} as const);
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const);
export const changeCurrentPageAC = (page: number) => ({type: 'CHANGE-CURRENT-PAGE', page} as const);
export const setTotalUsersCountAC = (count: number) => ({type: 'SET-TOTAL-USERS-COUNT', count} as const);
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const);

