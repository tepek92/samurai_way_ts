import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {
  getProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserPhotoThunkCreator,
  updateUserStatusThunkCreator,
  UserProfileType
} from "../../redux/profileReducer";
import {StateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getProfile, getStatus} from "../../selectors/profileSelectors";
import {getUserLoginId} from "../../selectors/authSelectors";
import {withRedirect} from "../../hok/withRedirect";
import {Profile} from "./Profile";


type PathParamsType = {
  userId: string
}
export type ProfileContainerType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>;

class ProfileContainerAPI extends React.Component<ProfileContainerType> {
  userId = this.props.match.params.userId
    ? this.props.match.params.userId
    : this.props.userLoginId

  refreshProfilePage = () => {
    const userId =
      this.props.match.params.userId
        ? this.props.match.params.userId
        : this.props.userLoginId
    if (userId === null) {
      this.props.history.push('/login');
    } else {
      this.props.getProfiler(userId + '');
      this.props.getStatus(userId + '');
    }

    this.userId = userId
  }

  componentDidMount() {
    this.refreshProfilePage()
  }

  componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfilePage()
    }
  }


  render() {
    return <Profile
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      updatePhoto={this.props.updatePhoto}
      isMe={this.props.userLoginId === this.userId}
    />
  }
}

export type MapStateType = {
  profile: UserProfileType
  status: string
  userLoginId: number | null
}

export type MapDispatchType = {
  getProfiler: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
  updatePhoto: (photo: File) => void
}

const mapStateToProps = (state: StateType): MapStateType => {
  return {
    profile: getProfile(state),
    status: getStatus(state),
    userLoginId: getUserLoginId(state),
  }
};

export const ProfileContainer = compose<ComponentType>
(
  withRouter,
  withRedirect,
  connect(mapStateToProps, {
    getProfiler: getProfileThunkCreator,
    getStatus: getUserStatusThunkCreator,
    updateStatus: updateUserStatusThunkCreator,
    updatePhoto: updateUserPhotoThunkCreator,
  })
)(ProfileContainerAPI)