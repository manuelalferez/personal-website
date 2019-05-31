import React from "react";
import "./Blog.css";
import PostMini from "./PostMini";

function Blog(props) {
  return (
    <div className="Blog">
        <PostMini />
        <PostMini />
        <PostMini />
        <PostMini />
    </div>
  );
}

export default Blog;