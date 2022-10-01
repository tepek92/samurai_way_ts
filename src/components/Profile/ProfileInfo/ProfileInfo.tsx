import React from 'react'
import style from './ProfileInfo.module.css'

export function ProfileInfo() {

    return (
        <div className={style.profile_info}>
            <img className={style.avatar}
                 src={"https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"} alt={''}/>
            <div className={style.info}>
                <p><b>Pavel Rasyk</b></p>
                <p>City: Novosibirsk</p>
                <p>Status: Im GOOD!</p>
            </div>
        </div>
    );
}