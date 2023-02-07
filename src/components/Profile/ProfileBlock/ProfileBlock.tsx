import React, {FC} from 'react'
import style from './ProfileBlock.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import Paper from '@mui/material/Paper';
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfilePropsType} from "../Profile";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";

export const ProfileBlock: FC<ProfilePropsType> =
  ({
     profile,
     status,
     isMe,
     updateStatus,
     updatePhoto,
  }) => {

    return (
      !profile.userId
        ? <Preloader/>
        : <Paper>
          <div className={style.contentBox}>
            <ProfileAvatar profile={profile} isMe={isMe} updatePhoto={updatePhoto} />

            <div className={style.name}>{profile.fullName ? profile.fullName : 'Samurai'}</div>
            <div className={style.job}>
              {profile.lookingForAJob
                ? 'Open for work'
                : 'Frontend developer'}
            </div>

            {profile.aboutMe && <div className={style.aboutMe}>{profile.aboutMe}</div>}

            <ProfileStatus isMe={isMe} status={status} updateStatus={updateStatus}/>
          </div>
        </Paper>
    );
  }