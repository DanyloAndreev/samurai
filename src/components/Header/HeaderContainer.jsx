import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setToken, setAuthorized } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  logout = () => {
    const authorized = {
      authorized: false,
      expiry: 0,
    };
    sessionStorage.setItem("isAuthorized", JSON.stringify(authorized));
    this.props.setAuthorized(false);
  };

  render() {
    return <Header {...this.props} logout={this.logout} />;
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
})(HeaderContainer);
