import React from "react";
import "./Sidebar.css";
import data from "../../data/Blog/Sidebar";

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <h2 className="Sidebar__title">Categories</h2>
      {data.map(item => (
        <button className="Sidebar__category" key={item.key}>
          {item.category}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
