import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthMeThunkCreator} from "../../redux/authReducer";
import {StateType} from "../../redux/store";

export type HeaderPropsType = MapState & MapDispatch;

class HeaderContainerAPI extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUser();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

type MapState = {
    login: string | null,
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MapState => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

type MapDispatch = {
    getAuthUser: () => void
}

export const HeaderContainer = connect(mapStateToProps,
    {getAuthUser: getAuthMeThunkCreator})(HeaderContainerAPI);