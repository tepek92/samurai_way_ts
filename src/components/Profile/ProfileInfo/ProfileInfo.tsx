import React from 'react'
import style from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from '../../../img/samurai2.png'
import {ProfilePropsType} from "../Profile";


export function ProfileInfo(props: ProfilePropsType) {
    const {profile} = props;

    return (
        !profile.userId
            ? <Preloader/>
            : <div className={style.profile_info}>
                <img className={style.avatar}
                     src={profile.photos.large ? profile.photos.large : avatar} alt={''}/>
                <div className={style.info}>
                    <p className={style.name}><b>{profile.fullName ? profile.fullName : 'Samurai'}</b></p>
                    <p><b>Статус: </b>{profile.aboutMe ? profile.aboutMe : "Нет статуса:("}</p>
                    <p><b>Ищет работу: </b>{profile.lookingForAJob ? profile.lookingForAJobDescription : "Уже работаю:)"}</p>
                </div>
            </div>
    );
}