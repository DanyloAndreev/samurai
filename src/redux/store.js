// import profileReducer from "./profile-reducer";
// import messageReducer from "./message-reducer";
//
// let store = {
//     _state: {
//         profile: {
//             postsData: [
//                 {
//                     id: 1,
//                     text: "1. Hi from attribute message",
//                     likesCount: 1,
//                 },
//                 {
//                     id: 2,
//                     text: "2. Hi from attribute message",
//                     likesCount: 1,
//                 },
//                 {
//                     id: 3,
//                     text: "3. Hi from attribute message",
//                     likesCount: 1,
//                 },
//             ],
//             newPostText: "new post text!",
//         },
//         messages: {
//             dialogsData: [
//                 {
//                     id: "1",
//                     name: "Nazar",
//                 },
//                 {
//                     id: "2",
//                     name: "Pavlo",
//                 },
//                 {
//                     id: "3",
//                     name: "Sebbe",
//                 },
//             ],
//             messagesData: [
//                 {
//                     message: "Go eat",
//                 },
//                 {
//                     message: "Go smoke",
//                 },
//                 {
//                     message: "Go work",
//                 },
//             ],
//             newMessageText: "",
//         },
//     },
//     _callSubscriber() {
//         console.log("State changed");
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.profile = profileReducer(this._state.profile, action);
//         this._state.messages = messageReducer(this._state.messages, action);
//
//         this._callSubscriber(this._state);
//     },
// };
//
// export default store;
// window.store = store;
