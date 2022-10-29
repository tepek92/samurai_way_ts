import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {BestFriends} from "./BestFriends/BestFriends";
import {SideBarType} from "../../redux/sidebarReducer";

type NavbarPropsType = {
    sidebar: SideBarType
}

export function Navbar(props: NavbarPropsType) {
    const bestFriends = props.sidebar.bestFriends;
    return (
        <nav className={style.nav}>
            <div className={style.link}><NavLink to={"/profile"} activeClassName={style.active}>Profile</NavLink></div>
            <div className={style.link}><NavLink to={"/dialogs"} activeClassName={style.active}>Messages</NavLink></div>
            <div className={style.link}><NavLink to={"/news"} activeClassName={style.active}>News</NavLink></div>
            <div className={style.link}><NavLink to={"/music"} activeClassName={style.active}>Music</NavLink></div>
            <div className={style.link}><NavLink to={"/settings"} activeClassName={style.active}>Settings</NavLink></div>
            <BestFriends bestFriends={bestFriends}/>
        </nav>
    );
}