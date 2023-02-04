import React, {ChangeEvent} from 'react'
import style from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from '../../../img/samurai2.png'
import {ProfilePropsType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";


export const ProfileInfo = (props: ProfilePropsType) => {
  const {profile, status, updateStatus, updatePhoto} = props;

  const onChangeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('file = ', e.target.files)
    if(e.target.files?.length) {
      updatePhoto(e.target.files[0])
    }
  }
  return (
    !profile.userId
      ? <Preloader/>
      : <div className={style.profile_info}>
        <div>
          <img className={style.avatar}
               src={profile.photos?.large ? profile.photos.large : avatar}
               alt={''}/>
          <input type="file" onChange={onChangeFileHandler}/>

        </div>

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