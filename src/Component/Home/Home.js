import React from "react";
import "./Home.css";
import CardContent from "./CardContent";
import Card from "../Card/Card";

function Home(props) {
  return (
    <div className="Home">
      <Card content={<CardContent/>}/>
    </div>
  );
}

export default Home;
