import React from "react";
import "./Content.css";
import leftArrow from "../../images/Blog/left-arrow.svg";
import rightArrow from "../../images/Blog/right-arrow.svg";

function Content(props) {
  return (
    <div className="Content">
      <div className='Content__body'>Content</div>
      <div className="Content__controls">
        <button className="Controls__botton"><img src={leftArrow}/></button>
        <button className="Controls__botton"><img src={rightArrow}/></button>
      </div>
      <div className='Content__pages'>Page 1/2</div>
    </div>
  );
}

export default Content;
