import React, {Component} from "react";
import "./Blog.css";
import PostMini from "./PostMini";
import posts from "../../data/Blog/PostMini";
import CardBlog from "./CardBlog";

class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: 'Home'
    }
  }

  render(){
    return (
      <div className="Blog">
       {/*  {posts.map(post => (
          <PostMini
            title={post.title}
            summary={post.summary}
            date={new Date(post.date.year, post.date.month - 1, post.date.day)}
            link={post.link}
            languages={post.languages}
            key={post.key}
          />
        ))} */}
        <CardBlog category={this.state.category} />
      </div>
    );
  }
}

export default Blog;
