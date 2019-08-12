import React from "react";
import "./PageNotFound.css";

import lost_IMG from "../../images/PageNotFound/lost.png";

function PageNotFound(props) {
  return (
    <div className="PageNotFound">
      <img
        src={lost_IMG}
        alt="Page not found"
        className="PageNotFound__image"
      />
      <h1 className="PageNotFound__text">The requested page does not exist</h1>
    </div>
  );
}

export default PageNotFound;
