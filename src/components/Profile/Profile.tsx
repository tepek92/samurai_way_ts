import React from 'react';
// import style from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType

}
export function Profile({store}: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={store}/>
        </div>
    );
}