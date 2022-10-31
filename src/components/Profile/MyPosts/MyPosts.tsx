import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";
// import style from './MyPosts.module.css'


export type MyPostsPropsType = {
    posts: PostType[]
    textPost: string
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickHandler: () => void
};

export function MyPosts(props: MyPostsPropsType) {
    const {posts, textPost, onChangeHandler, onClickHandler} = props;

    const postsElement = posts.map(p => <Post key={p.id} text={p.text} like={p.like}/>);

    return (
        <div>
            <p><b>My post</b></p>
            <textarea onChange={onChangeHandler} value={textPost}></textarea>
            <div><button onClick={onClickHandler}>add post</button></div>
            {postsElement}
        </div>
    );
}
