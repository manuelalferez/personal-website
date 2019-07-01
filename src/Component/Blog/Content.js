import React, {Component} from "react";
import "./Content.css";
import leftArrow from "../../images/Blog/left-arrow.svg";
import rightArrow from "../../images/Blog/right-arrow.svg";
import posts from '../../data/Blog/MyPosts';

class Content extends Component{

  componentDidMount(){
    if(posts[0].pages === 1){
      const controls = document.getElementById('controls');
      controls.classList.add('noShow');
    }
  }

  render(){
    return (
      <div className="Content">
        <div className='Content__body'>
          <h2 className='Body__title'>{posts[0].content.title}</h2>
          {
            posts[0].content.text.map(paragraph => (
              <p>{paragraph}</p>
            ))
          }
        </div>
        <div className="Content__controls" id='controls'>
          <button className="Controls__botton"><img src={leftArrow}/></button>
          <button className="Controls__botton"><img src={rightArrow}/></button>
        </div>
        <div className='Content__pages'>Page {this.props.currentPage}/{posts[0].pages}</div>
      </div>
    );
  }
}

export default Content;
