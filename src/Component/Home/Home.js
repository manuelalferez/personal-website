import React from "react";
import "./Home.css";
import Card from "./Card";
import Button from "./Button";
import contactIcon from "../../images/Home/contact.svg";
import blogIcon from "../../images/Home/blog.svg";

function Home(props) {
  return (
    <div className="Home">
      <div className="Home__BarButtons">
        <Button content="Contact" path="/contact" image={contactIcon} />
        <Button content="Blog" path="/blog" image={blogIcon} />
      </div>
      <Card />
    </div>
  );
}

export default Home;
