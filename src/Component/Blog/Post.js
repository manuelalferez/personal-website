import React, { Component } from "react";
import "./Post.css";
import posts from "../../data/Blog/Posts";

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
        id: key-1
      });
    }
  }
  render() {
    return <div className="Post">{posts[this.state.id].title}</div>;
  }
}

export default Post;
