import React from "react";
import "./CardBlog.css";
import NavBar from "./Sidebar";
import Content from "./Content";

function CardBlog(props) {
  return (
    <div className="CardBlog">
      <NavBar />
      <Content />
    </div>
  );
}

export default CardBlog;
