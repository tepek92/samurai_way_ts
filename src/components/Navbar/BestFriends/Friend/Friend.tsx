import React from 'react';
import style from './../BestFriends.module.css';

type FriendPropsType = {
    name: string
    avatar: string
}
export function Friend(props: FriendPropsType) {
    const {name, avatar} = props;
    return (
            <div className={style.element}>
                <img className={style.avatar} alt='avatar' src={avatar}/>
                <div className={style.name}>{name}</div>
            </div>
    );
}