import React, {ChangeEvent} from "react";
import {ACAddPost, ACUpdateTextPost} from "../../../redux/profileReducer";
import {StoreType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../redux/storeContext";
// import style from './MyPosts.module.css'


type MyPostsPropsType = {
    // store: StoreType
};

// export function MyPostsContainer({store}: MyPostsPropsType) {
//     const posts = store.getState().profilePage.posts;
//     const textPost = store.getState().profilePage.textPost;
//     const {dispatch} = store;
//
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(ACUpdateTextPost(e.currentTarget.value));
//     const onClickHandler = () => dispatch(ACAddPost());
//
//     return (
//         <MyPosts posts={posts} textPost={textPost} onChangeHandler={onChangeHandler} onClickHandler={onClickHandler} />
//     );
// }

export function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) =>
                {
                    const posts = store.getState().profilePage.posts;
                    const textPost = store.getState().profilePage.textPost;
                    const {dispatch} = store;

                    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(ACUpdateTextPost(e.currentTarget.value));
                    const onClickHandler = () => dispatch(ACAddPost());

                    return (
                        <MyPosts posts={posts} textPost={textPost} onChangeHandler={onChangeHandler} onClickHandler={onClickHandler} />
                    );
                }
            }
        </StoreContext.Consumer>
    );




}