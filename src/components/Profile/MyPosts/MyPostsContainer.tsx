import {ChangeEvent} from "react";
import {addPostAC, updateTextPostAC} from "../../../redux/profileReducer";
import {StateType} from "../../../redux/store";
import {MyPosts, MyPostsPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
// import style from './MyPosts.module.css'

    const mapStateToProps = (state: StateType): Omit<MyPostsPropsType, 'onChangeHandler' |'onClickHandler'> => ({
        posts: state.profilePage.posts,
        textPost: state.profilePage.textPost,
    });

    const mapDispatchToProps = (dispatch: Dispatch): Omit<MyPostsPropsType, 'posts' | 'textPost'> => ({
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(updateTextPostAC(e.currentTarget.value)),
        onClickHandler: () => dispatch(addPostAC())
    })

    export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
