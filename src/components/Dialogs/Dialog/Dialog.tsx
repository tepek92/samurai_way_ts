import React from 'react'
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    id: string
    name: string
    avatar: string
};

export function Dialog(props: DialogPropsType) {
    const {id, name, avatar} = props;

    const path = '/dialogs/' + id;
    return (
        <div className={style.body}>
            <NavLink className={style.link} activeClassName={style.active} to={path}>
                <img alt={'avatar'} src={avatar}/>
                <div className={style.name}>
                    <div>{name}</div>
                    <div>Написать сообщение</div>
                </div>
            </NavLink>
        </div>
    )
}