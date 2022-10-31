import {ChangeEvent} from "react";
import {ACAddPost, ACUpdateTextPost} from "../../../redux/profileReducer";
import {DispatchType, StateType} from "../../../redux/store";
import {MyPosts, MyPostsPropsType} from "./MyPosts";
import {connect} from "react-redux";
// import style from './MyPosts.module.css'

    const mapStateToProps = (state: StateType): Omit<MyPostsPropsType, 'onChangeHandler' |'onClickHandler'> => ({
        posts: state.profilePage.posts,
        textPost: state.profilePage.textPost,
    });

    const mapDispatchToProps = (dispatch: DispatchType): Omit<MyPostsPropsType, 'posts' | 'textPost'> => ({
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(ACUpdateTextPost(e.currentTarget.value)),
        onClickHandler: () => dispatch(ACAddPost())
    })

    export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
