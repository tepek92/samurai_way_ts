import React from 'react';
// import style from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {MapStateType} from "./ProfileContainer";


export function Profile(props: MapStateType) {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer />
        </div>
    );
}