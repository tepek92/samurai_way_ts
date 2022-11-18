import React from 'react';
import {connect} from "react-redux";
import {setUserProfileAC, UserProfileType} from "../../redux/profileReducer";
import axios from "axios";
import {Profile} from "./Profile";
import {StateType} from "../../redux/store";


export type ProfileContainerType = MapStateType & MapDispatchType;

class ProfileContainerAPI extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
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


export const ProfileContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainerAPI)
