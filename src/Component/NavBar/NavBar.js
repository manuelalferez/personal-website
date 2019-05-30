import React from "react";
import Button from "./Button";
import images from "../Imports";
import "./NavBar.css";
import navBarData from "../../data/NavBar/NavBarData";

function NavBar(props) {
  return (
    <div className="NavBarContainer">
      <div className="NavBar">
        {navBarData.map(item => (
          <Button
            content={item.content}
            path={item.path}
            image={images[item.posImportImage]}
          />
        ))}
        {props.children}
      </div>
    </div>
  );
}

export default NavBar;
