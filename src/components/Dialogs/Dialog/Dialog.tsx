import React, {FC} from 'react'
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
  id: string
  name: string
  avatar: string
};

export const Dialog: FC<DialogPropsType> =
  ({id, name, avatar}) => {
    const path = '/dialogs/' + id;
    return (
      <NavLink className={style.link} activeClassName={style.active} to={path}>
        <div className={style.body}>
          <div><img alt={'avatar'} src={avatar}/></div>
          <div className={style.name}>{name}</div>
        </div>
      </NavLink>
    )
  }