import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
  isAuthorized: JSON.parse(state.authReducer.isAuthorized).authorized,
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuthorized) {
        return <Redirect to={"/login"} />;
      }
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
