import React from "react";
import "./NavContents.css";

function NavContents({ Icon, title }) {
  return (
    <div className="navContents_container">
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default NavContents;
