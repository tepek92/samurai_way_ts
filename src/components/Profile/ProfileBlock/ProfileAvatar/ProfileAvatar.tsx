import React, {ChangeEvent, FC} from 'react';
import Fab from "@mui/material/Fab";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Avatar from "@mui/material/Avatar";
import avatar from "../../../../img/samurai2.png";
import style from "../ProfileBlock.module.css";
import Badge from "@mui/material/Badge";
import {UserProfileType} from "../../../../redux/profileReducer";

type ProfileAvatarPropsType = {
  profile: UserProfileType
  isMe: boolean
  updatePhoto: (photo: File) => void
}

export const ProfileAvatar: FC<ProfileAvatarPropsType> =
  ({profile, isMe, updatePhoto}) => {

    const onChangeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
        updatePhoto(e.target.files[0])
      }
    }
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      badgeContent={
        isMe && <Fab
              aria-label="upload picture"
              component="label"
              size="small"
          >
              <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={onChangeFileHandler}
              />
              <AddAPhotoIcon/>
          </Fab>

      }
    >
      <Avatar
        src={profile.photos?.large ? profile.photos.large : avatar}
        className={style.avatar}
        sx={{width: 150, height: 150}}
        alt="avatar"
      />
    </Badge>
  );
};