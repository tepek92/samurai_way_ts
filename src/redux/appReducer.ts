import {getAuthMeThunkCreator} from "./authReducer";
import {DispatchType, ThunkType} from "./store";

export type AppActionsType =
  ReturnType<typeof initializedSuccessAC>;

export type AppReducerStateType = {
  initialized: boolean
}

const initialState = {
  initialized: false,
};

export const appReducer = (state: AppReducerStateType = initialState, action: AppActionsType): AppReducerStateType => {
  switch (action.type) {
    case "INITIALIZED-SUCCESS":
      return {...state, initialized: true}
    default:
      return state;
  }
}

export const initializedSuccessAC = () => ({type: "INITIALIZED-SUCCESS"} as const);

export const initializedAppSuccessTC = (): ThunkType =>
  async (dispatch: DispatchType) => {
    await dispatch(getAuthMeThunkCreator());
    dispatch(initializedSuccessAC());
  }
