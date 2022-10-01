import React from 'react'
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    id: string
    name: string
};

export function Dialog(props: DialogPropsType) {
    const {id, name} = props;

    const path = '/dialogs/' + id;
    return (
        <div><NavLink className={style.link} activeClassName={style.active} to={path}>{name}</NavLink></div>
    )
}