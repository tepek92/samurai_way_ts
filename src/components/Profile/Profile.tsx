import React from 'react';
// import style from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profileReducer";

export type ProfilePropsType = {
    profile: UserProfileType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer />
        </div>
    );
}