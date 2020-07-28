import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import usersReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profileReducer,
  messageReducer,
  usersReducer,
  authReducer,
  appReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);
// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;
