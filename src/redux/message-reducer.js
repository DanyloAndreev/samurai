const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialMessage = {
  messages: {
    dialogsData: [
      {
        id: "1",
        name: "Nazar",
      },
      {
        id: "2",
        name: "Pavlo",
      },
      {
        id: "3",
        name: "Sebbe",
      },
    ],
    messagesData: [
      {
        message: "Go eat",
      },
      {
        message: "Go smoke",
      },
      {
        message: "Go work",
      },
    ],
  },
};
const messageReducer = (state = initialMessage, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messages.messagesData = [
        ...state.messages.messagesData,
        { message: action.message },
      ];
      return stateCopy;
    }

    // case UPDATE_NEW_MESSAGE_TEXT:
    //   return {
    //     ...state,
    //     messages: { ...state.messages, newMessageText: action.text },
    //   };
    //   {
    //   let stateCopy = { ...state };
    //   stateCopy.messages.newMessageText = action.text;
    //   return stateCopy;
    // }

    default:
      return state;
  }
};
export const addNewMessageActionCreator = (message) => ({
  type: ADD_MESSAGE,
  message: message,
});

// export const updateNewMessageActionCreator = (text) => ({
//   type: UPDATE_NEW_MESSAGE_TEXT,
//   text: text,
// });

export default messageReducer;
