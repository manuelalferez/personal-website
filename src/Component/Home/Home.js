import React from "react";
import "./Home.css";
import Card from "./Card";
import Button from "./Button";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";

function Home(props) {
  return (
    <div className="Home">
      <div className="Home__BarButtons">
        <Button content="Contacto" path="/contact" />
        <Button content="Blog" path="/blog" />
      </div>
      <Card />
    </div>
  );
}

export default Home;
