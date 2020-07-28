import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        userProfile={props.userProfile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
