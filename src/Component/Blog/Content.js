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

  render() {
    return (
      <div className="Content">
        <div className="Content__body">
          <div className="Body__header" id="Body__header">
            <h2 className="Header__title">{posts[0].content.title}</h2>
            <p className="Header__date">{posts[0].date}</p>
          </div>
          <div className="Body__content">
            {posts[0].content.text[this.props.currentPage - 1].map(
              paragraph => (
                <p>{paragraph}</p>
              )
            )}
          </div>
        </div>
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
