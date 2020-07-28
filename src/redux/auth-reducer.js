import React from "react";
import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_TOKEN = "SET_TOKEN";
const SET_AUTHORAIZED = "SET_AUTHORAIZED";
let initialState = {
  token: null,
  isAuthorized: sessionStorage.getItem("isAuthorized"),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_AUTHORAIZED:
      return {
        ...state,
        isAuthorized: action.isAuthorized,
      };
    default:
      return state;
  }
};

export const setToken = (token) => ({
  type: SET_TOKEN,
  token: token,
});

export const setAuthorized = (isAuthorized) => ({
  type: SET_AUTHORAIZED,
  isAuthorized: isAuthorized,
});

//thunk
export const loginThunkCreator = (email, password) => {
  return (dispatch) => {
    authAPI
      .login(email, password)
      .then((response) => {
        if (response.data.token) {
          dispatch(setToken(response.data.token));
          let now = new Date();
          const authorized = {
            authorized: true,
            expiry: now.getTime(),
          };
          sessionStorage.setItem("isAuthorized", JSON.stringify(authorized));
          dispatch(setAuthorized(JSON.stringify(authorized)));
        }
      })
      .catch((error) => {
        dispatch(stopSubmit("login", { _error: error.response.data.error }));
      });
  };
};

export default authReducer;
