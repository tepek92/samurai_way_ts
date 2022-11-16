import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {StateType} from "../../redux/store";
import {
    ACChangeCurrentPage,
    ACSetTotalUsersCount,
    ACSetUsers,
    ACToggleSubscribe,
    UserType
} from "../../redux/usersReducer";

export type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
}

export type MapDispatchToPropsType = {
    onToggleSubscribe: (userId: number) => void
    onSetUsers: (users: UserType[]) => void
    onChangeCurrenPage: (page: number) => void
    onSetTotalUsersCount: (count: number) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    onToggleSubscribe: (userId: number) => dispatch(ACToggleSubscribe(userId)),
    onSetUsers: (users: UserType[]) => dispatch(ACSetUsers(users)),
    onChangeCurrenPage: (page: number) => dispatch(ACChangeCurrentPage(page)),
    onSetTotalUsersCount: (count: number) => dispatch(ACSetTotalUsersCount(count)),
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
