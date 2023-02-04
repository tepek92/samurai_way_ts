import React from "react";
import style from "./Post.module.css";
import {UserProfileType} from "../../../../redux/profileReducer";
import avatar from '../../../../img/samurai2.png'
// "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" Rick

type PostPropsType = {
    text: string
    like: number
    profile: UserProfileType
}

export const Post = (props: PostPropsType) => {
    const {text, like, profile} = props;
    return (
        <div className={style.my_post}>
            <img className={style.avatar}
                 src={profile.photos?.small ? profile.photos.small : avatar} alt={''}/>
            <span>
                {text}
                <div className={style.like}>{like}<button>like</button></div>
            </span>
        </div>
    );
}
