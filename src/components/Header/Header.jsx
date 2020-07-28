import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo_720.png";
import LoginContainer from "../Login/LoginContainer";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let authButton;
  let isAuthorized = JSON.parse(props.isAuthorized).authorized;
  if (isAuthorized) {
    authButton = (
      <button
        onClick={() => {
          props.logout();
        }}
      >
        Log out
      </button>
    );
  } else {
    authButton = (
      <NavLink className={classes.token} to="/login">
        {isAuthorized ? "Logged in" : "Login"}
      </NavLink>
      // <div
      //   onClick={() => {
      //     return ;
      //     // props.authorization();
      //   }}
      // >
      //   {isAuthorized ? "Logged in" : "Login"}
      // </div>
    );
  }
  return (
    <header className={classes.header}>
      <img src={logo} alt="aviasecrets" />
      <div className={classes.login}>
        {authButton}
        <LoginContainer />
      </div>
      <span className={classes.token}>{isAuthorized && "true"}</span>
    </header>
  );
};

export default Header;
