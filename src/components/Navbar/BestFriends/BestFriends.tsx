import React from 'react';
import style from './BestFriends.module.css';
import {BestFriendsType} from "../../../redux/state";
import {Friend} from "./Friend/Friend";

type BestFriendsPropsType = {
    bestFriends: BestFriendsType[]
}

export function BestFriends(props: BestFriendsPropsType) {
    const bestFriends = props.bestFriends;
    const bestFriendsElement = bestFriends.map(f => <Friend key={f.id} name={f.name} avatar={f.avatar} />);

    return (
        <div className={style.body}>
            <div>Best Friends</div>
            <div className={style.friends}>{bestFriendsElement}</div>
        </div>
    );
}
