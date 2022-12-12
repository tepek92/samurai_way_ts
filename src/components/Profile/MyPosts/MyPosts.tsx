import React from "react";
import {Post} from "./Post/Post";
import {PostType, UserProfileType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type MyPostsPropsType = {
    posts: PostType[]
    onClickHandler: (postText: string) => void
    profile: UserProfileType
};

export function MyPosts(props: MyPostsPropsType) {
    const {posts, profile, onClickHandler} = props;

    const postsElement = posts.map(p => <Post key={p.id} text={p.text} like={p.like} profile={profile}/>);

    const onSubmit = (formData: FormDataPostType) => {
        onClickHandler(formData.postTex);
    }

    return (
        <div>
            <p><b>My post</b></p>
            <PostFormWithFom onSubmit={onSubmit}/>
            {postsElement}
        </div>
    );
}

// ==========================
type FormDataPostType = {
    postTex: string
}

function MyPostsForm(props: InjectedFormProps<FormDataPostType>) {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea" name="postTex"></Field>
                <div>
                    <button>add post</button>
                </div>
            </div>
        </form>
    );
}

const PostFormWithFom = reduxForm<FormDataPostType>({
    form: 'posts'
})(MyPostsForm);
