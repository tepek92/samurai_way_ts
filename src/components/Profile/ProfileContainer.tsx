import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {
    getProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
    UserProfileType
} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {StateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withRedirect} from "../../hok/withRedirect";
import {compose} from "redux";
import {getProfile, getStatus} from "../../selectors/profileSelectors";
import {getUserLoginId} from "../../selectors/authSelectors";


type PathParamsType = {
    userId: string
}
export type ProfileContainerType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>;

class ProfileContainerAPI extends React.Component<ProfileContainerType> {


    componentDidMount() {
        const userId =
            this.props.match.params.userId
                ? this.props.match.params.userId
                : this.props.userLoginId
        if(userId === null) {
            this.props.history.push('/login');
        } else {
            this.props.getProfiler(userId+'');
            this.props.getStatus(userId+'');
        }
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

export type MapStateType = {
    profile: UserProfileType
    status: string
    userLoginId: number | null

}

export type MapDispatchType = {
    getProfiler: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: StateType): MapStateType => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        userLoginId: getUserLoginId(state)
    }
};

export const ProfileContainer = compose<ComponentType>
(
    withRouter,
    // withRedirect,
    connect(mapStateToProps, {
        getProfiler: getProfileThunkCreator,
        getStatus: getUserStatusThunkCreator,
        updateStatus: updateUserStatusThunkCreator
    })
)(ProfileContainerAPI)