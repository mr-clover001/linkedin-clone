import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
        <Avatar />
        <h2>Anoop Kumar</h2>
        <h4>ak6260168744@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>who viewed you</p>
          <p className="sidebar_statNumber">2313</p>
        </div>
        <div className="sidebar_stat">
          <p>views on the post</p>
          <p className="sidebar_statNumber">2316</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Programming")}
        {recentItem("Javascript")}
        {recentItem("Bootstrap")}
        {recentItem("App design")}
        {recentItem("ExpressJs")}
      </div>
    </div>
  );
}

export default Sidebar;
