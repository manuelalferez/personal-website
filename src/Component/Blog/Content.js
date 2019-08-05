import React, { Component } from "react";
import "./Content.css";
import leftArrow from "../../images/Blog/left-arrow.svg";
import rightArrow from "../../images/Blog/right-arrow.svg";
import pdfImage from "../../images/Blog/pdf.svg";
import posts from "../../data/Blog/MyPosts";
import downloads from "../../downloads/imports";

const NEXT = 1;
const BACK = -1;
const IS_HOME = 0;
const POST_LIST_PER_PAGE = 6;

class Content extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.showBody = this.showBody.bind(this);
    this.belongCategory = this.belongCategory.bind(this);
    this.showDownloadButton = this.showDownloadButton.bind(this);
    this.getPostList = this.getPostList.bind(this);
    this.printPostItem = this.printPostItem.bind(this);
    this.fillCategory = this.fillCategory.bind(this);
  }
  componentDidMount() {
    if (posts[0].pages === 1) {
      const controls = document.getElementById("controls");
      controls.classList.add("no_show");
    }
  }

  componentDidUpdate() {
    const header = document.getElementById("Body__header");
    if (this.props.current_page !== 1) {
      header.classList.add("no_show");
    } else {
      header.classList.remove("no_show");
    }
  }

  handleClick(mode) {
    this.props.onChangePage(mode);
  }

  printPostItem(post) {
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

  belongCategory(post, key_list) {
    if (post.category === this.props.post_selected) {
      key_list.push(post.key);
    }
  }

  showDownloadButton() {
    if (!isNaN(this.props.post_selected)) {
      let download_URL = downloads[this.props.post_selected];
      let download_name = `${
        posts[this.props.post_selected].content.title
      }.pdf`;
      return (
        <a href={download_URL} download={download_name} className="Download">
          <img src={pdfImage} alt="Symbol of a file" />
          Descargar
        </a>
      );
    }
  }

  fillCategory(){
    let key_list = [];
    posts.map(post => this.belongCategory(post, key_list));
    this.props.addPostsKey(this.props.category, key_list);
    let num_pages = Math.ceil(this.props.getSizeCategory(this.props.category) / POST_LIST_PER_PAGE);
    this.props.setPage(num_pages);
  }

  getPostList() {
    if (!this.props.getSizeCategory(this.props.category)) {
     this.fillCategory();
    }
    //TODO ciclo para sacar los post de la pagina actual 
    let start = (this.props.current_page-1)*6;
    for (start; start<this.props.getSizeCategory(this.props.category) || ){
      in this.props.getPostsKeys(category)
    }
  }

  showBody() {
    if (
      this.props.post_selected === IS_HOME ||
      !isNaN(this.props.post_selected)
    ) {
      let post_position = this.props.post_selected;
      if (this.props.post_selected === IS_HOME) {
        post_position = 0;
      }
      return (
        <React.Fragment>
          <div className="Body__header" id="Body__header">
            <h2 className="Header__title">
              {posts[post_position].content.title}
            </h2>
            <p className="Header__date">{posts[post_position].date}</p>
          </div>
          <div className="Body__content">
            {posts[post_position].content.text[this.props.current_page - 1].map(
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
            <h2 className="Header__title">{this.props.post_selected}</h2>
          </div>
          <div className="Posts__list">{this.getPostList()}</div>
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
        <div className="Content__pages__download">
          <div className="Pages">
            Página {this.props.current_page}/
            {posts[this.props.post_selected].pages}
          </div>
          {this.showDownloadButton()}
        </div>
      </div>
    );
  }
}

export default Content;
