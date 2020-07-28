import React from "react";
import { connect } from "react-redux";
import {
  follow,
  followUser,
  getUsersThunkCreator,
  setFollowProgress,
  unfollow,
} from "../../redux/user-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {
  getCurrentPage,
  getFollowProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersReselect,
} from "../../redux/user-selector";

class UsersContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onPageChanged = this.onPageChanged.bind(this); // to use as method, not a callback
  // }
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage);
  }

  onPageChanged = (page) => {
    this.props.getUsersThunkCreator(page);
  };

  follow = (userId) => {
    this.props.followUser(userId, "1");
  };

  unfollow = (userId) => {
    this.props.followUser(userId, "0");
  };

  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.follow}
          unfollow={this.unfollow}
          followProgress={this.props.followProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersReselect(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followProgress: getFollowProgress(state),
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setFollowProgress,
  getUsersThunkCreator,
  followUser,
})(UsersContainer);
