import React from 'react'
import style from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from '../../../img/samurai2.png'
import {ProfilePropsType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";


export function ProfileInfo(props: ProfilePropsType) {
    const {profile, status, updateStatus} = props;

    return (
        !profile.userId
            ? <Preloader/>
            : <div className={style.profile_info}>
                <img className={style.avatar}
                     src={profile.photos.large ? profile.photos.large : avatar} alt={''}/>
                <div className={style.info}>
                    <p className={style.name}><b>{profile.fullName ? profile.fullName : 'Samurai'}</b></p>
                    <p><b>Обо мне: </b>{profile.aboutMe ? profile.aboutMe : "Пытаюсь стать програмистом"}</p>
                    <p><b>Ищет работу: </b>{profile.lookingForAJob ? profile.lookingForAJobDescription : "Уже работаю:)"}</p>
                    <br/>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
    );
}