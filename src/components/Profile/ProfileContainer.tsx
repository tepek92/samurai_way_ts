import React from 'react';
import {connect} from "react-redux";
import {getProfileThunkCreator, UserProfileType} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {StateType} from "../../redux/store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


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
        return (
            this.props.isAuth
                ? <Profile profile={this.props.profile}/>
                : <Redirect to={'/login'} />
        );
    }
}

export type MapStateType = {
    profile: UserProfileType
    isAuth: boolean
}

export type MapDispatchType = {
    getProfiler: (userId: string) => void
}

const mapStateToProps = (state: StateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
};


export const ProfileContainer = connect(mapStateToProps, {getProfiler: getProfileThunkCreator})(withRouter(ProfileContainerAPI))
