import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[]
};
export function MyPosts(props: MyPostsPropsType) {
    const {posts} = props;
    const postsElement = posts.map(p => <Post key={p.id} text={p.text} like={p.like}/>);
    return (
        <div>
            <p><b>My post</b></p>
            <textarea></textarea>
            <div><button>add post</button></div>
            {postsElement}
        </div>
    );
}
