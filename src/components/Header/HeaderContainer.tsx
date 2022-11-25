import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserAC} from "../../redux/authReducer";
import {StateType} from "../../redux/store";
import {authAPI} from "../../api/api";

export type HeaderPropsType = MapState & MapDispatch;

class HeaderContainerAPI extends React.Component<HeaderPropsType> {

    componentDidMount() {
        authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    this.props.setAuthUser(id, email, login);
                }
                console.log(data)

            });
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
    setAuthUser: (userId: number, email: string, login: string) => void
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUser: setAuthUserAC})(HeaderContainerAPI);