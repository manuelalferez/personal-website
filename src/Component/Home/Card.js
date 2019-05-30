import React from "react";
import "./Card.css";
import profilePicture from "../../images/Home/profile.png";
import socialData from "../../data/SocialData";
/* import cardData from '../../Data/CardData'; */

function Card(props) {
  return (
    <div className="Card">
      <div className="Card__header">
        <img className="Header__picture" src={profilePicture} />
        <div className="Header__description">
          <p>Hi! I'm Manuel Alférez Ruiz</p>
          <p>I live in Jaén, Spain</p>
          <br />
          <p>Developing | Sharing | Kaizen</p>
        </div>
      </div>
      <div className="Card__bio">
        <h1 className="Bio__title">Little about me</h1>
        <div className="Bio__description">
          <p>
            At the moment, I am learning Front-end and English. At the same time
            we help grow the
            <a
              href="https://twitter.com/GdgJaen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDG Jaén
            </a>
            community and I study computer engineering at
            <a
              href="https://www.ujaen.es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UJA
            </a>
          </p>
          <p>The future ... the future is exciting.</p>
        </div>
      </div>
      <div className="Card__social">
        {socialData.map(item => (
          <a
            className={item.className}
            href={item.dir}
            key={item.key}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      </div>
      <div className="Card__footer">
        Designed and made with ❤️ by
        <a
          href="https://twitter.com/manuelalferez "
          target="_blank"
          rel="noopener noreferrer"
        >
          Manuel Alférez
        </a>
      </div>
    </div>
  );
}

export default Card;
