import {addPostTC, PostType, UserProfileType} from "../../../redux/profileReducer";
import {StateType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

type MSTPMyPostsType = {
    posts: PostType[]
    profile: UserProfileType
}

const mapStateToProps = (state: StateType): MSTPMyPostsType => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile
});

export const MyPostsContainer = connect(mapStateToProps, {
    onClickHandler: addPostTC
})(MyPosts);
