import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostType, UserProfileType} from "../../../redux/profileReducer";
// import style from './MyPosts.module.css'


export type MyPostsPropsType = {
    posts: PostType[]
    textPost: string
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickHandler: () => void
    profile: UserProfileType
};

export function MyPosts(props: MyPostsPropsType) {
    const {posts, textPost, profile, onChangeHandler, onClickHandler} = props;

    const postsElement = posts.map(p => <Post key={p.id} text={p.text} like={p.like} profile={profile}/>);

    return (
        <div>
            <p><b>My post</b></p>
            <textarea onChange={onChangeHandler} value={textPost}></textarea>
            <div><button onClick={onClickHandler}>add post</button></div>
            {postsElement}
        </div>
    );
}
