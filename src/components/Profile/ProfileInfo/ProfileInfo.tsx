import React from 'react'
import style from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from '../../../img/samurai2.png'
import {ProfilePropsType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


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
                    <ProfileStatus aboutMe={profile.aboutMe}/>
                    <p><b>Ищет работу: </b>{profile.lookingForAJob ? profile.lookingForAJobDescription : "Уже работаю:)"}</p>
                </div>
            </div>
    );
}