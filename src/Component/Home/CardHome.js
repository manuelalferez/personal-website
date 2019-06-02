import React from "react";
import "./CardHome.css";
import profilePicture from "../../images/Home/profile.png";
import socialData from "../../data/Home/SocialData";
import cardData from "../../data/Home/CardData";

function CardHome(props) {
  return (
    <div className="CardHome">
      <div className="CardHome__header">
        <img
          className="Header__picture"
          src={profilePicture}
          alt="Manuel face"
        />
        <div className="Header__description">
          <p>{cardData.greeting}</p>
          <p>{cardData.live}</p>
          <br />
          <p>{cardData.status}</p>
        </div>
      </div>
      <div className="CardHome__bio">
        <h1 className="Bio__title">Little about me</h1>
        <div className="Bio__description">
          <p>
            {cardData.bioPartOne}
            <a
              href="https://twitter.com/GdgJaen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDG Jaén
            </a>
            {cardData.bioPartTwo}
            <a
              href="https://www.ujaen.es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UJA
            </a>
          </p>
          <p>{cardData.bioPartThree}</p>
        </div>
      </div>
      <div className="CardHome__social">
        {socialData.map(item => (
          <a
            className={item.className}
            href={item.dir}
            key={item.key}
            target="_blank"
            rel="noopener noreferrer"
          > <span>Read More</span></a>
        ))}
      </div>
      <div className="CardHome__footer">
        Designed and made with
        <span className='Footer__heart' role="img" aria-label="heart">
          ❤️
        </span>
        by
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

export default CardHome;
