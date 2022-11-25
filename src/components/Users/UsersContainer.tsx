import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../redux/store";
import {
    changeCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC, toggleIsFollowingAC,
    toggleSubscribeAC,
    UserType
} from "../../redux/usersReducer";
import {followAPI, usersAPI} from "../../api/api";


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
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.onSetUsers(data.items);
                this.props.onSetTotalUsersCount(data.totalCount);
                this.props.onToggleIsFetching(false);
            });
    }

    onClickChangeCurrentPage = (page: number) => {
        this.props.onToggleIsFetching(true);
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.onSetUsers(data.items);
                this.props.onToggleIsFetching(false);
            });
        this.props.onChangeCurrenPage(page);
    }

    subscribeToggle = (userId: number) => {
        this.props.onToggleIsFollowing(userId, true);
        followAPI.getFollow(userId)
            .then(data => {
                if (data) {
                    followAPI.deleteFollow(userId)
                        .then(data => {
                            if (data.resultCode === 0) {
                                this.props.onToggleSubscribe(userId)
                            }
                            this.props.onToggleIsFollowing(userId, false);
                        })
                } else {
                    followAPI.postFollow(userId)
                        .then(data => {
                            if (data.resultCode === 0) {
                                this.props.onToggleSubscribe(userId)
                            }
                            this.props.onToggleIsFollowing(userId, false);

                        })
                }
            })
    }

    render() {
        const {
            users,
            pageSize,
            currentPage,
            totalUsersCount,
            isFetching,
            isFollowing,
            onSetUsers,
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
    isFollowing: number[]
}

type MapDispatchToPropsType = {
    onToggleSubscribe: (userId: number) => void
    onSetUsers: (users: UserType[]) => void
    onChangeCurrenPage: (page: number) => void
    onSetTotalUsersCount: (count: number) => void
    onToggleIsFetching: (isFetching: boolean) => void
    onToggleIsFollowing: (userId: number, isFollowing: boolean) => void
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
    onToggleSubscribe: toggleSubscribeAC,
    onSetUsers: setUsersAC,
    onChangeCurrenPage: changeCurrentPageAC,
    onSetTotalUsersCount: setTotalUsersCountAC,
    onToggleIsFetching: toggleIsFetchingAC,
    onToggleIsFollowing: toggleIsFollowingAC,
})(UsersContainerAPI);
