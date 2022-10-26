import React from 'react';
// import style from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AllActionType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: AllActionType) => void

}
export function Profile(props: ProfilePropsType) {
    const {profilePage, dispatch} = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={profilePage} dispatch={dispatch}/>
        </div>
    );
}