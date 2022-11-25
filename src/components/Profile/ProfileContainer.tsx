import React from 'react';
import {connect} from "react-redux";
import {setUserProfileAC, UserProfileType} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {StateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";


type PathParamsType = {
    userId: string
}
export type ProfileContainerType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>;

class ProfileContainerAPI extends React.Component<ProfileContainerType> {


    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : '24767';

        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
                <Profile profile={this.props.profile}/>
        );
    }
}

export type MapStateType = {
    profile: UserProfileType
}

export type MapDispatchType = {
    setUserProfile: (profile: UserProfileType) => void
}

const mapStateToProps = (state: StateType): MapStateType => {
    return {profile: state.profilePage.profile}
};


export const ProfileContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(withRouter(ProfileContainerAPI))
