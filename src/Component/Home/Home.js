import React from "react";
import "./Home.css";
import Hero from "./Hero";
import Skills from "./Skills";
import Contact from "./Contact";

function Home(props) {
  return (
    <div className="Home">
     <Hero/>
     <Contact/>
    </div>
  );
}

export default Home;
