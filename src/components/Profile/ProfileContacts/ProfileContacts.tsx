import React, {FC} from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import {Site} from "../../../img/svg/Site";
import {GitHub} from "../../../img/svg/GitHub";
import {Twitter} from "../../../img/svg/Twitter";
import {Instagram} from "../../../img/svg/Instagram";
import {Facebook} from "../../../img/svg/Facebook";
import style from './ProfileContacts.module.css'
import {UserProfileType} from "../../../redux/profileReducer";

type ProfileContactsPropsType = {
  profile: UserProfileType
}
export const ProfileContacts: FC<ProfileContactsPropsType> =
  ({profile}) => {

  const website = profile.contacts?.website
    ? <a href={profile.contacts.website}>{profile.contacts.website}</a>
    : 'user did not provide a link'

    const github = profile.contacts?.github
      ? <a href={profile.contacts.github}>{profile.contacts.github}</a>
      : 'user did not provide a link'

    const twitter = profile.contacts?.twitter
      ? <a href={profile.contacts.twitter}>{profile.contacts.twitter}</a>
      : 'user did not provide a link'

    const instagram = profile.contacts?.instagram
      ? <a href={profile.contacts.instagram}>{profile.contacts.instagram}</a>
      : 'user did not provide a link'

    const facebook = profile.contacts?.facebook
      ? <a href={profile.contacts.facebook}>{profile.contacts.facebook}</a>
      : 'user did not provide a link'



  return (
    <Paper>
      <List>
        <ListItem>
          <div className={style.item}>
          <div className={style.itemName}>
            <Site/>
            <span className={style.linkName}>Website</span>
          </div>
          <span className={style.link}>{website}</span>
          </div>
        </ListItem>
        <Divider/>

        <ListItem>
          <div className={style.item}>
          <div className={style.itemName}>
            <GitHub/>
            <span className={style.linkName}>Github</span>
          </div>
          <span className={style.link}>{github}</span>
          </div>
        </ListItem>
        <Divider/>

        <ListItem>
          <div className={style.item}>
          <div className={style.itemName}>
            <div className={style.twitter}><Twitter/></div>
            <span className={style.linkName}>Twitter</span>
          </div>
          <span className={style.link}>{twitter}</span>
          </div>
        </ListItem>
        <Divider/>

        <ListItem>
          <div className={style.item}>
          <div className={style.itemName}>
            <div className={style.instagram}><Instagram/></div>
            <span className={style.linkName}>Instagram</span>
          </div>
          <span className={style.link}>{instagram}</span>
          </div>
        </ListItem>
        <Divider/>

        <ListItem>
          <div className={style.item}>
          <div className={style.itemName}>
            <div className={style.facebook}><Facebook/></div>
            <span className={style.linkName}>Facebook</span>
          </div>
          <span className={style.link}>{facebook}</span>
          </div>
        </ListItem>
      </List>
    </Paper>
  );
}