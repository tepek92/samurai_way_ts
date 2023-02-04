import React from 'react';
import {connect} from "react-redux";
import {deleteLoginMeThunkCreator, getAuthMeThunkCreator} from "../../redux/authReducer";
import {StateType} from "../../redux/store";
import {getIsAuth, getLogin} from "../../selectors/authSelectors";
import {Header} from "./Header";

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
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MapState => ({
    login: getLogin(state),
    isAuth: getIsAuth(state)
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