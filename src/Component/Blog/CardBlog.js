import React, { Component } from "react";
import "./CardBlog.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import posts from "../../data/Blog/MyPosts";

const MINIMUM = 1; // Pages start to count in 1
const NEXT = 1;
const BACK = -1;

class CardBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_selected: posts[0].key,
      current_page: 1,
      num_of_pages: posts[0].pages,
      post_in_each_category: {
        Home: [],
        Books: [],
        Reflections: [],
        Computing: [],
        Experiencies: []
      }
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.onChangeSelection = this.onChangeSelection.bind(this);
    this.addPostsKey = this.addPostsKey.bind(this);
    this.setPage = this.setPage.bind(this);
    this.getSizeCategory = this.getSizeCategory.bind(this);
    this.getPostsKeys = this.getPostsKeys.bind(this);
  }

  addPostsKey(category, vector_keys) {
    this.setState(prevState => ({
      post_in_each_category: {
        ...prevState.post_in_each_category,
        category: vector_keys
      }
    }));
  }

  getSizeCategory(category) {
    return this.state.post_in_each_category.category.lenght();
  }

  getPostsKeys(category) {
    return this.state.post_in_each_category.category;
  }

  setPage(page) {
    this.setState({
      current_page: page
    });
  }

  onChangePage(mode) {
    if (
      (mode === BACK && this.state.current_page > MINIMUM) ||
      (mode === NEXT && this.state.current_page <= this.state.num_of_pages)
    ) {
      this.setState(state => ({
        current_page: state.current_page + mode
      }));
    }
  }

  onChangeSelection(newSelection) {
    this.setState({
      post_selected: newSelection,
      current_page: 1
    });
    if (!isNaN(newSelection)) {
      this.setState({
        num_of_pages: posts[newSelection].pages
      });
    }
  }

  render() {
    return (
      <div className="CardBlog">
        <Sidebar manageClick={this.onChangeSelection} />
        <Content
          post_selected={this.state.post_selected}
          current_page={this.state.current_page}
          onChangePage={this.onChangePage}
          selectPost={this.onChangeSelection}
          post_in_each_category={this.post_in_each_category}
          addPostsKey={this.addPostsKey}
          setPage={this.setPage}
          getSizeCategory={this.getSizeCategory}
          getPostsKeys={this.getPostsKeys}
        />
      </div>
    );
  }
}

export default CardBlog;
