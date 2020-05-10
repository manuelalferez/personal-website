import React, { Component } from "react";
import Markdown from 'react-markdown'
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      post: ''
    };
  }
  async componentDidMount() {
    const search = this.props.location.pathname;
    if (search) {
      const key = search.split("=")[1];
      const posted = await import(`../../data/Blog/posts/${key}.md`);
      this.setState({
        id: key,
        post: posted.default
      });
    }
  }

  render() {
    return (
      <Markdown
        source={this.post}
        escapeHtml={false}
      />
    )
  }
}

export default Post;
