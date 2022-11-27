import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../redux/store";
import {
    changeCurrentPageAC,
    getUsersThunkCreator,
    subscribeToggleThunkCreator,
    UserType
} from "../../redux/usersReducer";


type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;
// type UserResponseType = {
//     items: UserType[]
//     totalCount: number
//     error: null
// }

class UsersContainerAPI extends React.Component<UsersPropsType> {

    // вызывается, когда компонента вмонтировалась в разметку
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onClickChangeCurrentPage = (page: number) => {
        this.props.getUsers(page, this.props.pageSize);
        this.props.changeCurrenPage(page);
    }

    subscribeToggle = (userId: number) => {
        this.props.subscribeToggle(userId);
    }

    render() {
        const {
            users,
            pageSize,
            currentPage,
            totalUsersCount,
            isFetching,
            isFollowing,
        } = this.props;

        return (
            <Users
                users={users}
                pageSize={pageSize}
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                isFetching={isFetching}
                isFollowing={isFollowing}
                onToggleSubscribe={this.subscribeToggle}
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
    isFollowing: number[]
}

type MapDispatchToPropsType = {
    changeCurrenPage: (page: number) => void
    getUsers: (page: number, pageSize: number) => void,
    subscribeToggle: (userId: number) =>void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing
});

export const UsersContainer = connect(mapStateToProps, {
    changeCurrenPage: changeCurrentPageAC,
    getUsers: getUsersThunkCreator,
    subscribeToggle: subscribeToggleThunkCreator
})(UsersContainerAPI);
