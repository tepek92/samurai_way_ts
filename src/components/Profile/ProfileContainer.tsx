import React from 'react';
import {connect} from "react-redux";
import {setUserProfileAC, UserProfileType} from "../../redux/profileReducer";
import axios from "axios";
import {Profile} from "./Profile";
import {StateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}
export type ProfileContainerType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>;

class ProfileContainerAPI extends React.Component<ProfileContainerType> {


    componentDidMount() {
        console.log(this.props)
        const userId = this.props.match.params.userId ? this.props.match.params.userId : '2';

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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


export const ProfileContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(withRouter(ProfileContainerAPI))
