import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileStatusHooks from "../ProfileStatus/ProfileStatusHook";

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />;
  }
  return (
    <div>
      {/*<div>*/}
      {/*  <img*/}
      {/*    src="https://images.pexels.com/photos/945615/pexels-photo-945615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"*/}
      {/*    alt="Profile Photo"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={classes.descriptionBlock}>
        <div>
          <span>
            {props.userProfile.data.first_name +
              " " +
              props.userProfile.data.last_name}
          </span>
        </div>
        <div>
          <img src={props.userProfile.data.avatar} alt="" />
        </div>

        <ProfileStatusHooks
          status={props.status}
          userId={props.userProfile.data.id}
          updateStatus={props.updateStatus}
        />
        <div>
          <span>email: </span>
          <span>{props.userProfile.data.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
