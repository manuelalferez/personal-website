import React, { Component } from "react";
import "./CardBlog.css";
import Sidebar from "./Sidebar";
import Content from "./Content";

const NEXT = 1;
const BACK = -1;
const min = 1;
const max = 3;

class CardBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Home",
      currentPage: 1
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
  }

  onChangePage(mode) {
    if (
      (mode === BACK && this.state.currentPage > min) ||
      (mode === NEXT && this.state.currentPage < max)
    ) {
      this.setState(state => ({
        currentPage: state.currentPage + mode
      }));
    }
  }

  onChangeCategory(newCategory){
    this.setState({
      category: newCategory 
    });
  }

  render() {
    return (
      <div className="CardBlog">
        <Sidebar manageClick={this.onChangeCategory} />
        <Content
          category={this.state.category}
          currentPage={this.state.currentPage}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}

export default CardBlog;
