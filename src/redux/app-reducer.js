import React from "react";
const INIT_STATUS = "INIT_STATUS";
let initialState = {
  initStatus: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_STATUS:
      return {
        ...state,
        initStatus: action.status,
      };
    default:
      return state;
  }
};

export const initialize = (status) => ({
  type: INIT_STATUS,
  status: status,
});

export const initThunk = () => (dispatch) => {
  Promise.all([
    // new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
    // new Promise((resolve) => setTimeout(() => resolve(1), 1000)), // 1
  ]).then(() => {
    dispatch(initialize(true));
  });
};

export default appReducer;
