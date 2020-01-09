import React from "react";
import "./Blog.css";
import posts from "../../data/Blog/PostsData";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";

const CATEGORIES = ["Libros", "Reflexiones", "Informática", "Ajedrez"];

function Blog(props) {
  let list = [];
  let counter; //Detect if there is a post in a category
  let list_content;
  let category_wrapper;

  for (const category of CATEGORIES) {
    counter = 0;
    list_content = [];

    category_wrapper = (
      <h1 key={category} className="Blog__category">
        {category}
      </h1>
    );

    for (const post of posts) {
      if (post.category === category) {
        counter++;
        list_content.push(
          <p key={post.key} className="Blog__post">
            <b>
              <Link to={`/blog/post/id=${post.key}`} className='Post__link'>{post.title}</Link> -{" "}
            </b>{" "}
            {post.summary}
          </p>
        );
      }
    }

    if (!counter) {
      list.push(
          <div className="Category__wrapper">
            {category_wrapper}
            <p className="Category__list Blog__post">
             Todavía no hay posts para esta categoría
            </p>
          </div>
        );
    }else{
      list.push(
        <div className="Category__wrapper">
          {category_wrapper}
          <div className="Category__list">{list_content}</div>
        </div>
      );
    }
  }

  return <div>
    <div className="Blog">{list}</div>
       <Footer/>
    </div>;
}

export default Blog;
