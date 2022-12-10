import React from 'react';
import {connect} from "react-redux";
import {getProfileThunkCreator, UserProfileType} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {StateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withRedirect} from "../../hok/withRedirect";


type PathParamsType = {
    userId: string
}
export type ProfileContainerType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>;

class ProfileContainerAPI extends React.Component<ProfileContainerType> {


    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : '24767';
        this.props.getProfiler(userId);
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

export type MapStateType = {
    profile: UserProfileType
}

export type MapDispatchType = {
    getProfiler: (userId: string) => void
}

const mapStateToProps = (state: StateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
    }
};

const withRedirectProfile = withRedirect(ProfileContainerAPI)


export const ProfileContainer = connect(mapStateToProps, {getProfiler: getProfileThunkCreator})(withRouter(withRedirectProfile))
