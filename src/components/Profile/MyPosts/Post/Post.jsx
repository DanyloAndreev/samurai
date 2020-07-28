import classes from './Post.module.css'
import React from "react";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://catalog-telegram.info/storage/1161/aviasecrets-1577995622.jpg" alt=""/>
            {props.message}
            <span> like </span> {props.likesCount}
        </div>
    );
}

export default Post
