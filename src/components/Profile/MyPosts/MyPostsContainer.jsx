import React from "react";
import {
  addPostActionCreator,
  // updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profileReducer.postsData,
    newPostText: state.profileReducer.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // updateNewPostText: (text) => {
    //   dispatch(updateNewPostTextActionCreator(text));
    // },
    addPost: (post) => {
      dispatch(addPostActionCreator(post));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
