import React from "react";
import Navbar from "../NavBar/NavBar";

function Layout(props) {
  return (
    <div className="Layout">
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
