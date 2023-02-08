import React, {FC} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {ProfilePostsContainer} from "./ProfilePosts/ProfilePostsContainer";
import {UpdateUserType, UserProfileType} from "../../redux/profileReducer";
import {ProfileBlock} from "./ProfileBlock/ProfileBlock";
import {ProfileContacts} from "./ProfileContacts/ProfileContacts";

export type ProfilePropsType = {
  profile: UserProfileType
  status: string
  isMe: boolean
  updateStatus: (status: string) => void
  updatePhoto: (photo: File) => void
  updateProfile: (dataUser: UpdateUserType) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={1}>

        <Grid container xs={5} spacing={1} sx={{height: '100%'}}>
          <Grid xs={12}>
            <ProfileBlock {...props}/>
          </Grid>

          <Grid xs={12}>
            <ProfileContacts profile={props.profile}/>
          </Grid>
        </Grid>

        <Grid container xs={7} spacing={1}>
          <Grid xs={12}>
            <ProfilePostsContainer isMe={props.isMe}/>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
}