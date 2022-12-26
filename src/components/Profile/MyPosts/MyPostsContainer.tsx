import {addPostTC, PostType, UserProfileType} from "../../../redux/profileReducer";
import {StateType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {getPosts, getProfile} from "../../../selectors/profileSelectors";

type MSTPMyPostsType = {
    posts: PostType[]
    profile: UserProfileType
}

const mapStateToProps = (state: StateType): MSTPMyPostsType => ({
    posts: getPosts(state),
    profile: getProfile(state)
});

export const MyPostsContainer = connect(mapStateToProps, {
    onClickHandler: addPostTC
})(MyPosts);
