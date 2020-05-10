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
      const key = search.split("post/")[1];
      const posted = require(`../../data/Blog/posts/${key}.md`);
      const data = await fetch(posted).then(res => res.text());
      this.setState({
        id: key,
        post: data
      });
    }
  }

  render() {
    return (
      <div className="Post_graper">
        <div className="Post">
            <Markdown
              source={this.state.post}
              escapeHtml={false}
            />
        </div>
      </div>
    )
  }
}

export default Post;
