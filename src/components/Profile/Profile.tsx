import React from 'react';
// import style from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
}
export function Profile(props: ProfilePropsType) {
    const posts = props.profilePage.posts;

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    );
}