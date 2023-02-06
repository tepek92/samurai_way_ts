import React, {FC} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profileReducer";
import {ProfileBlock} from "./ProfileBlock/ProfileBlock";
import {ProfileContacts} from "./ProfileContacts/ProfileContacts";

export type ProfilePropsType = {
  profile: UserProfileType
  status: string
  isMe: boolean
  updateStatus: (status: string) => void
  updatePhoto: (photo: File) => void
}


const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={1}>

        <Grid container xs={5} spacing={1}>

          <Grid xs={12}>
            <ProfileBlock {...props}/>
          </Grid>

          <Grid xs={12}>
            <ProfileContacts profile={props.profile}/>
          </Grid>

        </Grid>

        <Grid container xs={7} spacing={1}>

          <Grid xs={12}>
            <Item>
              {`vrvrvrvrvrvfffffffffffffffffffffffffffffffffffffffffffff`}
            </Item>
          </Grid>

          <Grid xs={12}>
            <MyPostsContainer/>
          </Grid>

        </Grid>

      </Grid>
    </Box>
  );
}