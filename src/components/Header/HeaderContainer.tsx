import React from 'react';
import {connect} from "react-redux";
import {deleteLoginMeThunkCreator, getAuthMeThunkCreator} from "../../redux/authReducer";
import {StateType} from "../../redux/store";
import {getIsAuth, getLogin} from "../../selectors/authSelectors";
import {Header} from "./Header";
import {getProfile} from "../../selectors/profileSelectors";
import {UserProfileType} from "../../redux/profileReducer";

export type HeaderPropsType = MapState & MapDispatch;

class HeaderContainerAPI extends React.Component<HeaderPropsType> {

    componentDidMount() {
        // this.props.getAuthUser();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

type MapState = {
    login: string | null,
    isAuth: boolean,
    profile: UserProfileType
}
const mapStateToProps = (state: StateType): MapState => ({
    login: getLogin(state),
    isAuth: getIsAuth(state),
    profile: getProfile(state),
});

type MapDispatch = {
    getAuthUser: () => void
    deleteLogin: () => void
}

export const HeaderContainer = connect(mapStateToProps,
    {
        getAuthUser: getAuthMeThunkCreator,
        deleteLogin: deleteLoginMeThunkCreator
    })(HeaderContainerAPI);