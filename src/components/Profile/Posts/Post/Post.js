import React from "react";
import classes from "./Post.module.css";

const Post = function (props) {

  const likesStr = (likes) => likes === 1 ? `1 Like` : `${ likes } Likes`;

  const dateStr = (date) => {
    date = date ? new Date(date) : 'Invalid Date';
    if (String(date) === 'Invalid Date') return 'Unknown time'
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);
    return `${ day }.${ month }.${ year }, ${hours}:${minutes}`;
  };

  return (
    <div className={classes.post}>
      <div className={classes.postBox}>
        <div className={"mt-1 text-secondary"}>
          <span>{ dateStr(props.post.date) }</span>
        </div>
        <div className={"px-2 py-1"}>{ props.post.text }</div>
        <div>
          <button className={"btn btn-primary btn-sm my-2"}>{ likesStr(props.post.likes) }</button>
        </div>
      </div>
    </div>
  );
};

export default Post;