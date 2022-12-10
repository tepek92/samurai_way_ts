import React from "react";
import {connect} from "react-redux";
import {StateType} from "../redux/store";
import {Redirect} from "react-router-dom";

type MapStateTpPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateType): MapStateTpPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
};

export function withRedirect<T>(Component: React.ComponentType<T>) {

    const RedirectComponent = (props: MapStateTpPropsType) => {

        const {isAuth, ...restProps} = props;

        return (
            props.isAuth
                ? <Component {...restProps as T} />
                : <Redirect to={'/login'}/>
        );
    }


    return connect(mapStateToProps)(RedirectComponent);
}