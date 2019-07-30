import React, { Component } from "react";
import "./Content.css";
import leftArrow from "../../images/Blog/left-arrow.svg";
import rightArrow from "../../images/Blog/right-arrow.svg";
import posts from "../../data/Blog/MyPosts";

const NEXT = 1;
const BACK = -1;

class Content extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showBody = this.showBody.bind(this);
    this.belongCategory = this.belongCategory.bind(this);
  }
  componentDidMount() {
    if (posts[0].pages === 1) {
      const controls = document.getElementById("controls");
      controls.classList.add("noShow");
    }
  }

  componentDidUpdate() {
    const header = document.getElementById("Body__header");
    if (this.props.currentPage !== 1) {
      header.classList.add("noShow");
    } else {
      header.classList.remove("noShow");
    }
  }

  handleClick(mode) {
    this.props.onChangePage(mode);
  }

  belongCategory(post) {
    if (post.category === this.props.category) {
      return (
        <div
          className="List__item"
          key={post.key}
          onClick={() => this.props.selectPost(post.key)}
        >
          <span className="Item__date">{post.date}</span>
          <span className="Item__title">{post.content.title}</span>
          <p className="Item__summary">{post.summary}</p>
        </div>
      );
    }
  }

  showBody() {
    if (this.props.category === "Home" || !isNaN(this.props.category)) {
      let post_Position = this.props.category;
      if (this.props.category === "Home") {
        post_Position = 0;
      }
      return (
        <React.Fragment>
          <div className="Body__header" id="Body__header">
            <h2 className="Header__title">{posts[post_Position].content.title}</h2>
            <p className="Header__date">{posts[post_Position].date}</p>
          </div>
          <div className="Body__content">
            {posts[post_Position].content.text[this.props.currentPage - 1].map(
              paragraph => (
                <div dangerouslySetInnerHTML={{ __html: paragraph }} />
              )
            )}
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="Body__header" id="Body__header">
            <h2 className="Header__title">{this.props.category}</h2>
          </div>
          <div className="Posts__list">
            {posts.map(post => this.belongCategory(post))}
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div className="Content">
        <div className="Content__body">{this.showBody()}</div>
        <div className="Content__controls" id="controls">
          <div
            className="Controls__botton"
            onClick={() => this.handleClick(BACK)}
          >
            <img src={leftArrow} alt="Left arrow" />
          </div>
          <div
            className="Controls__botton"
            onClick={() => this.handleClick(NEXT)}
          >
            <img src={rightArrow} alt="Right arrow" />
          </div>
        </div>
        <div className="Content__pages">
          Page {this.props.currentPage}/{posts[0].pages}
        </div>
      </div>
    );
  }
}

export default Content;
