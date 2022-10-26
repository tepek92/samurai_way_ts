import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {ACAddPost, ACUpdateTextPost, AllActionType, ProfilePageType} from "../../../redux/state";
// import style from './MyPosts.module.css'


type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: AllActionType) => void
};

export function MyPosts(props: MyPostsPropsType) {
    const posts = props.profilePage.posts;
    const textPost = props.profilePage.textPost;
    const {dispatch} = props;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(ACUpdateTextPost(e.currentTarget.value));
    const onClickHandler = () => dispatch(ACAddPost());

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
