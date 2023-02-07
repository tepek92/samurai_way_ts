import React, {memo} from "react";
import {Post} from "./Post/Post";
import {PostType, UserProfileType} from "../../../redux/profileReducer";
import {FormDataPostType, PostFormWithFom} from "./PostsForm/PostsForm";

export type MyPostsPropsType = {
  posts: PostType[]
  onClickHandler: (postText: string) => void
  updateLikesPost: (id: string, likes: number) => void
  profile: UserProfileType
};

export const ProfilePosts = memo((props: MyPostsPropsType) => {
  const {posts, profile, onClickHandler, updateLikesPost} = props;

  const postsElement = posts.map(p => <Post key={p.id} id={p.id} text={p.text} likes={p.likes} views={p.views} profile={profile} updateLikesPost={updateLikesPost}/>);

  const onSubmit = (formData: FormDataPostType) => {
    onClickHandler(formData.postTex);
  }

  return (
    <div>
      <PostFormWithFom onSubmit={onSubmit} profile={profile}/>
      {postsElement}
    </div>
  );
})