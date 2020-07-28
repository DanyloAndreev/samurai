import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/helpers/object";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_FETCHING = "SET_FETCHING";
const CHECK_AUTHORIZED = "CHECK_AUTHORIZED";
const FOLLOW_PROGRESS = "FOLLOW_PROGRESS";

const BASE_URL = "https://reqres.in/api/users";

// let initialState = {
//   users: [
//     {
//       id: 1,
//       fullName: "Daniel",
//       status: "Creator",
//       location: { planet: "Earth", galaxy: "Milky way" },
//       followed: false,
//       avatarUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
//     },
//     {
//       id: 2,
//       fullName: "Julia",
//       status: "Dreamer",
//       location: { planet: "Earth", galaxy: "Milky way" },
//       followed: true,
//       avatarUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
//     },
//     {
//       id: 3,
//       fullName: "Oleg",
//       status: "Future",
//       location: { planet: "Earth", galaxy: "Milky way" },
//       followed: true,
//       avatarUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
//     },
//   ],
//
// };
let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isAuthorized: false,
  followProgress: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userId, {
          followed: true,
        }),
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userId, {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNum,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.total,
      };
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case CHECK_AUTHORIZED:
      return {
        ...state,
        isAuthorized: action.isAuthorized,
      };
    case FOLLOW_PROGRESS:
      return {
        ...state,
        followProgress: action.followProgress
          ? [...state.followProgress, action.id]
          : state.followProgress.filter((id) => id != action.id),
      };
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNum) => ({
  type: SET_CURRENT_PAGE,
  pageNum,
});
export const setTotalUsersCount = (total) => ({
  type: SET_TOTAL_USERS_COUNT,
  total,
});
export const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching,
});
export const checkAuthorized = (isAuthorized) => ({
  type: CHECK_AUTHORIZED,
  isAuthorized,
});
export const setFollowProgress = (followProgress, id) => ({
  type: FOLLOW_PROGRESS,
  followProgress,
  id,
});

//thunk
export const getUsersThunkCreator = (page) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    usersAPI.getUsers(page).then((data) => {
      let users = data.data.map((user) => ({
        id: user.id,
        fullName: user.first_name + " " + user.last_name,
        status: "Creator",
        location: { planet: "Earth", galaxy: "Milky way" },
        followed: false,
        avatarUrl: user.avatar,
      }));
      dispatch(setCurrentPage(page));
      dispatch(setFetching(false));
      dispatch(setUsers(users));
      dispatch(setTotalUsersCount(data.total));
    });
  };
};

export const followUser = (userId, param) => {
  return (dispatch) => {
    dispatch(setFollowProgress(true, userId));
    let isAuthorized = JSON.parse(localStorage.getItem("isAuthorized"))
      .authorized;
    if (isAuthorized) {
      usersAPI.followUser(userId, param).then(() => {
        debugger;
        if (param === "1") {
          dispatch(follow(userId));
        } else {
          dispatch(unfollow(userId));
        }
      });
      dispatch(setFollowProgress(false, userId));
    } else {
      dispatch(setFollowProgress(false, userId));
      alert("You are not authorized");
    }
  };
};
export default userReducer;
