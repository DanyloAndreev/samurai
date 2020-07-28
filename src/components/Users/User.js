import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";
import React from "react";

export const User = (data) => {
  return (
    <div key={data.user.id}>
      <span>
        <div>
          <NavLink to={"/profile/" + data.user.id}>
            <img
              className={classes.userFoto}
              src={data.user.avatarUrl}
              alt="Profile foto"
            />
          </NavLink>
        </div>
        <div>
          {data.user.followed ? (
            <button
              disabled={data.props.followProgress.some(
                (id) => id === data.user.id
              )}
              onClick={() => data.props.unfollow(data.user.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={data.props.followProgress.some(
                (id) => id === data.user.id
              )}
              onClick={() => data.props.follow(data.user.id)}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{data.user.fullName}</div>
          <div>{data.user.status}</div>
        </span>
        <span>
          <div>{data.user.location.planet}</div>
          <div>{data.user.location.galaxy}</div>
        </span>
      </span>
    </div>
  );
};
