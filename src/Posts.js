import React from "react";
import "./Posts.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatIcon from "@material-ui/icons/Chat";
import ShareOutlined from "@material-ui/icons/ShareOutlined";
import SendOutlined from "@material-ui/icons/SendOutlined";

function Posts() {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>Anoop kumar</h2>
          <p>description</p>
        </div>
      </div>
      <div className="post_body">
        <p>Message</p>
      </div>
      <div className="post_button">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Posts;
