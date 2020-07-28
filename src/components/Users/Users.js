import React from "react";
import { Paginator } from "../common/Pagination/Paginator";
import { User } from "./User";

let Users = (props) => {
  return (
    <div>
      <Paginator {...props} />
      <div>
        {props.users.map((user) => (
          <User user={user} props={props} />
        ))}
      </div>
    </div>
  );
};

export default Users;
