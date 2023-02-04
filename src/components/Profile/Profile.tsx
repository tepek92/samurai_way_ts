import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profileReducer";

export type ProfilePropsType = {
  profile: UserProfileType
  status: string
  updateStatus: (status: string) => void
  updatePhoto: (photo: File) => void
}

export function Profile(props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo {...props}/>
      <MyPostsContainer/>
    </div>
  );
}