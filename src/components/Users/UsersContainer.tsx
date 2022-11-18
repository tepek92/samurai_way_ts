import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../redux/store";
import {
    changeCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    toggleSubscribeAC,
    UserType
} from "../../redux/usersReducer";
import axios from "axios";


type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;
type UserResponseType = {
    items: UserType[]
    totalCount: number
    error: null
}

class UsersContainerAPI extends React.Component<UsersPropsType> {

    // вызывается, когда компонента вмонтировалась в разметку
    componentDidMount() {
        this.props.onToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                const data: UserResponseType = response.data;
                this.props.onSetUsers(data.items);
                this.props.onSetTotalUsersCount(data.totalCount);
                this.props.onToggleIsFetching(false);
            });
    }

    onClickChangeCurrentPage = (page: number) => {
        this.props.onToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.onSetUsers(response.data.items);
                this.props.onToggleIsFetching(false);
            });
        this.props.onChangeCurrenPage(page);
    }

    render() {
        const {
            users,
            pageSize,
            currentPage,
            totalUsersCount,
            isFetching,
            onToggleSubscribe,
            onSetUsers,
        } = this.props;

        return (
            <Users
                users={users}
                pageSize={pageSize}
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                isFetching={isFetching}
                onToggleSubscribe={onToggleSubscribe}
                onSetUsers={onSetUsers}
                onClickChangeCurrentPage={this.onClickChangeCurrentPage}
                />
        );
    }
}


type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    onToggleSubscribe: (userId: number) => void
    onSetUsers: (users: UserType[]) => void
    onChangeCurrenPage: (page: number) => void
    onSetTotalUsersCount: (count: number) => void
    onToggleIsFetching: (isFetching: boolean) => void
}


const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
});

export const UsersContainer = connect(mapStateToProps, {
    onToggleSubscribe: toggleSubscribeAC,
    onSetUsers: setUsersAC,
    onChangeCurrenPage: changeCurrentPageAC,
    onSetTotalUsersCount: setTotalUsersCountAC,
    onToggleIsFetching: toggleIsFetchingAC
})(UsersContainerAPI);
