import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import {
  loginThunkCreator,
  setAuthorized,
  setToken,
} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
  authorization = (email, password) => {
    this.props.loginThunkCreator(email, password);
  };
  render() {
    return <Login {...this.props} onSubmit={this.authorization} />;
  }
}

let mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
    isAuthorized: state.authReducer.isAuthorized,
  };
};

export default connect(mapStateToProps, {
  setToken,
  setAuthorized,
  loginThunkCreator,
})(LoginContainer);
