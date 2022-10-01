import React from 'react';
import style from './Header.module.css';


export function Header() {
    return (
        <header className={style.header}>
            <img
                // src={"https://www.picng.com/upload/samurai/png_samurai_39155.png"}
                // src={"https://www.picng.com/upload/samurai/png_samurai_39172.png"}
                src={"https://www.picng.com/upload/aikido/png_aikido_55913.png"}
                alt={''}/>
            <span>IT-SAMURAI</span>
        </header>
    );
}