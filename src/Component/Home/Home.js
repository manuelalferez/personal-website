import React from "react";
import "./Home.css";
import Card from "../Card/Card";
import CardHome from "./CardHome";

function Home(props) {
  return (
    <div className="Home">
      <Card content={<CardHome/>}/>
    </div>
  );
}

export default Home;
