import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.link}><NavLink to={"/profile"} activeClassName={style.active}>Profile</NavLink></div>
            <div className={style.link}><NavLink to={"/dialogs"} activeClassName={style.active}>Messages</NavLink></div>
            <div className={style.link}><NavLink to={"/users"} activeClassName={style.active}>Users</NavLink></div>
        </nav>
    );
}