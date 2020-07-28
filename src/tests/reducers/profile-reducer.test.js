import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator,
} from "../../redux/profile-reducer";
import React from "react";

let state = {
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
test("Adding new post. postsData length should be incremented", () => {
  let action = addPostActionCreator("Adding new post");
  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(4);
  expect(newState.postsData[3].text).toBe("Adding new post");
  expect(newState.postsData[3].likesCount).toBe(0);
});

test("Deleting new post. postsData length should be decremented", () => {
  let action = deletePostActionCreator(1);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(2);
});
