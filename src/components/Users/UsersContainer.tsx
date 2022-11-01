import React from "react";
import {connect} from "react-redux";
import {Users, UsersPropsType} from "./Users";
import {Dispatch} from "redux";
import {StateType} from "../../redux/store";
import {ACSetUsers, ACToggleSubscribe, UserType} from "../../redux/usersReducer";

const mapStateToProps = (state: StateType): Omit<UsersPropsType, 'onToggleSubscribe' | 'onSetUsers'> => ({
    users: state.usersPage.users
});

const mapDispatchToProps = (dispatch: Dispatch): Omit<UsersPropsType, 'users'> => ({
    onToggleSubscribe: (userId: string) => dispatch(ACToggleSubscribe(userId)),
    onSetUsers: (users: UserType[]) => dispatch(ACSetUsers(users))
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
