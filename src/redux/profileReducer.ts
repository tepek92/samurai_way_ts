import {v1} from "uuid";
import {PhotosUserType} from "./usersReducer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {reset} from "redux-form";
import {DispatchType, ThunkType} from "./store";

export type ProfileActionsType =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof setUserProfileAC> |
  ReturnType<typeof setUserPhotoAC> |
  ReturnType<typeof setUserStatusAC> |
  ReturnType<typeof setPostLikesAC>;


export type PostType = {
  id: string
  text: string
  likes: number
  views: number
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
  userId: string
  photos: PhotosUserType
}

export type UpdateUserType = {
  userId: string
  fullName: string
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  contacts: {
    website: string | null
    github: string | null
    twitter: string | null
    instagram: string | null
    facebook: string | null
  }
}

export type ProfilePageType = typeof initialState;

const initialState = {
  posts: [
    {
      id: v1(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus. Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.',
      likes: 78,
      views: 12
    },
    {
      id: v1(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus. Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.",
      likes: 34,
      views: 6
    },
    {
      id: v1(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus. Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.",
      likes: 5,
      views: 5
    },
    {
      id: v1(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus. Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.",
      likes: 1,
      views: 1
    },
  ] as PostType[],
  profile: {} as UserProfileType,
  status: "" as string,
};

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        posts: [{id: v1(), text: action.postText, likes: 0, views: 0}, ...state.posts],
      };
    case "SET-USER-PROFILE": {
      return {...state, profile: action.profile};
    }
    case "SET-STATUS-PROFILE": {
      return {...state, status: action.status};
    }
    case "SET-PHOTO-PROFILE": {
      return {...state, profile: {...state.profile, photos: action.photo}};
    }
    case "SET-LIKES-POST": {
      return {
        ...state,
        posts: state.posts.map(p => p.id === action.id ? {...p, likes: action.likes} : p)
      }
    }
    default:
      return state;
  }
}

export const addPostAC = (postText: string) => ({type: "ADD-POST", postText} as const);
export const setUserProfileAC = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile} as const);
export const setUserStatusAC = (status: string) => ({type: "SET-STATUS-PROFILE", status} as const);
export const setUserPhotoAC = (photo: PhotosUserType) => ({type: "SET-PHOTO-PROFILE", photo} as const);
export const setPostLikesAC = (id: string, likes: number) => ({type: "SET-LIKES-POST", id, likes} as const);

export const addPostTC = (postText: string): ThunkType =>
  (dispatch: Dispatch) => {
    dispatch(addPostAC(postText));
    dispatch(reset('posts'));
  }


export const getProfileThunkCreator = (userId: string): ThunkType =>
  async (dispatch: Dispatch) => {
    try {
      const data = await profileAPI.getProfile(userId)
      dispatch(setUserProfileAC(data));
    } catch (error) {
      // доавить обработку ошибок
    }
  }

export const getUserStatusThunkCreator = (userId: string): ThunkType =>
  async (dispatch: Dispatch) => {
    try {
      const data = await profileAPI.getUserStatus(userId)
      dispatch(setUserStatusAC(data));
    } catch (error) {
      // доавить обработку ошибок
    }
  }

export const updateUserStatusThunkCreator = (status: string): ThunkType =>
  async (dispatch: Dispatch) => {
    try {
      const data = await profileAPI.updateUserStatus(status)
      if (data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
      }
    } catch (error) {
      // доавить обработку ошибок
    }
  }

export const updateUserPhotoThunkCreator = (photo: File): ThunkType =>
  async (dispatch: Dispatch) => {
    try {
      const data = await profileAPI.updateUserPhoto(photo)
      if (data.resultCode === 0) {
        dispatch(setUserPhotoAC(data.data.photos));
      }
    } catch (error) {
      // доавить обработку ошибок
    }
  }

export const updateLikesPostThunkCreator = (id: string, likes: number): ThunkType =>
  async (dispatch: Dispatch) => {
    dispatch(setPostLikesAC(id, likes));
  }

export const updateUserProfileThunkCreator = (dataUser: UpdateUserType): ThunkType =>
  async (dispatch: DispatchType) => {
    try {
      const data = await profileAPI.updateUserProfile(dataUser)
      if (data.resultCode === 0) {
        dispatch(getProfileThunkCreator(dataUser.userId));
      }
    } catch (error) {
      // доавить обработку ошибок
    }
  }