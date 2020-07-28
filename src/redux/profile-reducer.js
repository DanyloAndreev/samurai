import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "profile/ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_USER_PROFILE_STATUS = "profile/SET_USER_PROFILE_STATUS";
const DELETE_POST = "profile/DELETE_POST";

let initialProfile = {
  postsData: [
    {
      id: 1,
      text: "1. Hi from attribute message",
      likesCount: 1,
    },
    {
      id: 2,
      text: "2. Hi from attribute message",
      likesCount: 1,
    },
    {
      id: 3,
      text: "3. Hi from attribute message",
      likesCount: 1,
    },
  ],
  // newPostText: "new post text!",
  userProfile: null,
  status: "",
};
const profileReducer = (state = initialProfile, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        text: action.post,
        likesCount: 0,
      };

      // let stateCopy = { ...state };
      // stateCopy.postsData = [...state.postsData];
      //
      // stateCopy.postsData.push(newPost);
      // stateCopy.newPostText = "";
      // return stateCopy;

      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    // case UPDATE_NEW_POST_TEXT:
    //   return {
    //     ...state,
    //     newPostText: action.text,
    //   };
    //
    // let stateCopy = { ...state };
    // stateCopy.newPostText = action.text;
    // return stateCopy;
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case SET_USER_PROFILE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id !== action.postId),
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (post) => ({ type: ADD_POST, post: post });
export const deletePostActionCreator = (postId) => ({
  type: DELETE_POST,
  postId: postId,
});

// export const updateNewPostTextActionCreator = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   text: text,
// });

export const setUserProfile = (data) => ({
  type: SET_USER_PROFILE,
  userProfile: data,
});
export const setUserProfileStatus = (status) => ({
  type: SET_USER_PROFILE_STATUS,
  status: status,
});

// export const getUserProfileThunk = (userId) => {
//   return (dispatch) => {
//     usersAPI.getProfile(userId).then((response) => {
//       dispatch(setUserProfile(response.data));
//     });
//   };
// };

//use async await instead of promise.then. Code looks better and it looks like sync code
export const getUserProfileThunk = (userId) => {
  return async (dispatch) => {
    let profile = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(profile.data));
  };
};

export const getUserProfileStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((status) => {
      dispatch(setUserProfileStatus(status));
    });
  };
};
export const updateUserProfileStatusThunk = (userId, status) => {
  return (dispatch) => {
    profileAPI.updateStatus(userId, status).then((status) => {
      dispatch(setUserProfileStatus(status));
    });
  };
};

export default profileReducer;
