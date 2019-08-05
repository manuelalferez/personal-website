import React, { Component } from "react";
import "./Post.css";
import posts from "../../data/Blog/PostsData";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }
  componentDidMount() {
    const search = this.props.location.pathname;
    if (search) {
      const key = search.split("=")[1];
      this.setState({
        id: key - 1
      });
    }
  }
  render() {
    return (
      <div className="Post">
        <h1 className="Post__title">{posts[this.state.id].title}</h1>
        <div className="Post__date">
          <p>{posts[this.state.id].date}</p>
        </div>
        {posts[this.state.id].content.map(paragraph => (
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    );
  }
}

export default Post;
