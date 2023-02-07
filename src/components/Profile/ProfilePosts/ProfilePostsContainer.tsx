import {addPostTC, PostType, updateLikesPostThunkCreator, UserProfileType} from "../../../redux/profileReducer";
import {StateType} from "../../../redux/store";
import {ProfilePosts} from "./ProfilePosts";
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

export const ProfilePostsContainer = connect(mapStateToProps, {
    onClickHandler: addPostTC,
    updateLikesPost: updateLikesPostThunkCreator
})(ProfilePosts);
