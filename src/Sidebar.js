import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar_conta" iner>
      <div className="Sidebar_contents">
        <img className="Sidebar_image" src="" alt="" />
        <Avatar />
        <h2>Anoop kumar</h2>
        <p className="Sidebar-email">ak3105@gmail.com</p>
        <div className="Sidebar_post">
          <p>Who viewed you</p>
          <span className="Sidebar_post1">2345</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
