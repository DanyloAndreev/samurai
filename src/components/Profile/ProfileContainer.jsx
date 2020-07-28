import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  setUserProfile,
  getUserProfileThunk,
  getUserProfileStatusThunk,
  updateUserProfileStatusThunk,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfileThunk(userId);
    this.props.getUserProfileStatusThunk(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        userProfile={this.props.userProfile}
        status={this.props.status}
        updateStatus={this.props.updateUserProfileStatusThunk}
      />
    );
  }
}
let mapStateToProps = (state) => ({
  userProfile: state.profileReducer.userProfile,
  status: state.profileReducer.status,
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let routerProfileContainer = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {
//   setUserProfile,
//   getUserProfileThunk,
// })(routerProfileContainer);
export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserProfileThunk,
    getUserProfileStatusThunk,
    updateUserProfileStatusThunk,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
