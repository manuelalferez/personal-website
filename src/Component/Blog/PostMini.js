import React from "react";
import "./PostMini.css";
import newImage from "../../images/Blog/new.svg";

function isNew(date) {
  const dateToday = new Date();
  var dayAsMilliseconds = 86400000;
  var diffInMillisenconds = dateToday - date;
  var diffInDays = Math.trunc(diffInMillisenconds / dayAsMilliseconds);

  if (diffInDays < 7) return "PostMini__image isNew";
  else return "PostMini__image";
}

function createEmojisLanguages(languages) {
  if (languages.spanish && languages.english)
    return (
      <span role="img" aria-label="languages">
        🇬🇧🇪🇸
      </span>
    );
  if (languages.spanish)
    return (
      <span role="img" aria-label="languages">
        🇪🇸
      </span>
    );
  if (languages.english)
    return (
      <span role="img" aria-label="languages">
        🇬🇧
      </span>
    );
}

function PostMini(props) {
  return (
    <a className="PostMini" href={props.link} rel="noopener noreferrer">
      <img className={isNew(props.date)} src={newImage} alt="Blog is new" />
      <h1 className="PostMini__title">
        {createEmojisLanguages(props.languages)}
        {props.title}
      </h1>
      <div className="PostMini__summary">
        {props.summary.map(paragraph => (
          <p>{paragraph}</p>
        ))}
      </div>
      <div className="PostMini__date">
        Date: {props.date.toLocaleDateString()}
      </div>
    </a>
  );
}

export default PostMini;
