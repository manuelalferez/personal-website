import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";

function Button(props) {
  return (
    <div className="Button">
      <NavLink to={props.path}>
        <img className="Button__image" src={props.image} alt={props.alt}/>
        {props.content}
      </NavLink>
    </div>
  );
}

export default Button;
