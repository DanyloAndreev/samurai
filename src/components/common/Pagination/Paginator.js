import classes from "../../Users/Users.module.css";
import React from "react";

export const Paginator = (props) => {
  let pagesCount = props.totalUsersCount / props.pageSize;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => {
        return (
          <span
            onClick={() => props.onPageChanged(page)}
            className={page === props.currentPage && classes.active}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};
