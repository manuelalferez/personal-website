import React, {Component} from "react";
import "./CardBlog.css";
import NavBar from "./Sidebar";
import Content from "./Content";

class CardBlog extends Component {
  constructor(props){
    super(props)
    this.state = {
      category: 'Home',
      currentPage: 1
    }
  }
  render(){
    return (
      <div className="CardBlog">
        <NavBar />
        <Content category={this.state.category} currentPage={this.state.currentPage}/>
      </div>
    );
  }
}

export default CardBlog;
