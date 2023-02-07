import React, {FC, useState} from 'react'
import style from './ProfileBlock.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import Paper from '@mui/material/Paper';
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfilePropsType} from "../Profile";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import Button from '@mui/material/Button';
import {FromDataProfileType, ProfileEdit} from "./ProfileEdit/ProfileEdit";
import {UpdateUserType} from "../../../redux/profileReducer";


export const ProfileBlock: FC<ProfilePropsType> =
  ({
     profile,
     status,
     isMe,
     updateStatus,
     updatePhoto,
     updateProfile,
   }) => {

    const [editMode, setEditMode] = useState(false)

    const onSubmit = (formData: FromDataProfileType) => {
      console.log(formData)
      const dataUser: UpdateUserType = {
        userId: profile.userId,
        fullName: formData.fullName,
        aboutMe: formData.aboutMe,
        lookingForAJob: formData.lookingForAJob,
        lookingForAJobDescription: 'test',
        contacts: {
          website: formData.website || null,
          github: formData.github || null,
          twitter: formData.twitter || null,
          instagram: formData.instagram || null,
          facebook: formData.facebook || null,
        }
      }
      updateProfile(dataUser)
      setEditMode(false)
    }

    if (!profile.userId) {
      return <Preloader/>
    }

    return (
      <Paper>
        {editMode
          ? <ProfileEdit profile={profile} onSubmit={onSubmit} setEditMode={setEditMode}/>
          : <div className={style.contentBox}>
            <ProfileAvatar profile={profile} isMe={isMe} updatePhoto={updatePhoto}/>
            <div className={style.name}>{profile.fullName ? profile.fullName : 'Samurai'}</div>
            <div className={style.job}>
              {profile.lookingForAJob
                ? 'Open for work'
                : 'Frontend developer'}
            </div>
            {profile.aboutMe && <div className={style.aboutMe}>{profile.aboutMe}</div>}
            <ProfileStatus isMe={isMe} status={status} updateStatus={updateStatus}/>
            {isMe &&
                <Button onClick={() => setEditMode(true)} sx={{mt: 3, width: '80px'}} variant="contained">EDIT</Button>}
          </div>
        }
      </Paper>
    );
  }