import React, { Component } from "react";
import "./Post.css";
import posts from "../../data/Blog/PostsData";
import calendar_IMG from '../../images/Blog/calendar.webp';

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
      <div className="Post_graper">
        <div className="Post">
          <h1 className="Post__title">{posts[this.state.id].title}</h1>
          <div className="Post__date">
            <p><img src={calendar_IMG} alt='Ilustration of one calendar' />{posts[this.state.id].date}</p>
          </div>
          {
            <div
              dangerouslySetInnerHTML={{ __html: posts[this.state.id].content }}
            />
          }
        </div>
      </div>

    );
  }
}

export default Post;
