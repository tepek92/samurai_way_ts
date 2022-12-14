import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";


export function Header(props: HeaderPropsType) {
    const {login, isAuth, deleteLogin} = props;

    const onClickHandler = () => {
        deleteLogin();
    }
    return (
        <header className={style.header}>
            <div>
                <img
                    // src={"https://www.picng.com/upload/samurai/png_samurai_39155.png"}
                    // src={"https://www.picng.com/upload/samurai/png_samurai_39172.png"}
                    src={"https://www.picng.com/upload/aikido/png_aikido_55913.png"}
                    alt={''}/>
                <span>IT-SAMURAI</span>
            </div>
            {isAuth
                ?
                <div>
                    <div>
                        {login} <button onClick={onClickHandler}>log out</button>
                    </div>
                </div>
                :
                <div>
                    <NavLink className={style.link} to={"/login"}>LOGIN</NavLink>
                </div>}
        </header>
    );
}