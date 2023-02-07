import React, {FC} from "react";
import style from "./Post.module.css";
import {UserProfileType} from "../../../../redux/profileReducer";
import avatar from '../../../../img/samurai2.png'
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';

type PostPropsType = {
  id: string
  text: string
  likes: number
  views: number
  profile: UserProfileType
  updateLikesPost: (id: string, likes: number) => void
}

export const Post: FC<PostPropsType> =
  ({id, text, likes, profile, views, updateLikesPost}) => {
    return (
      <Paper sx={{height: '100%', mb: 2}}>
        <div className={style.post}>
          <List sx={{padding: '0 20px'}}>
            <ListItem>
              <div className={style.avatarBlock}>
                <div className={style.avatar}>
                  <Avatar
                    src={profile.photos?.large ? profile.photos.large : avatar}
                    sx={{width: 30, height: 30}}
                    alt="avatar"
                  />
                  <span className={style.name}>{profile.fullName}</span>
                </div>
                <span className={style.views}>{views} Views</span>
              </div>
            </ListItem>
            <Divider/>

            <ListItem>
              <div className={style.textBlock}>
                <span className={style.text}>{text}</span>
                <IconButton onClick={() => updateLikesPost(id, likes + 1)}>
                  <Badge
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    badgeContent={likes}
                  >
                    <FavoriteIcon sx={{color: 'red'}}/>
                  </Badge>
                </IconButton>
              </div>
            </ListItem>
          </List>
        </div>
      </Paper>
    );
  }
