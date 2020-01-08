import React from "react";
import "./Hero.css";
import profilePicture from "../../images/Home/profile.webp";
import socialData from "../../data/Home/SocialData";
import cardData from "../../data/Home/CardData";

function Hero(props) {
    return (
        <div className="Hero">
            <div className="Hero__header">
                <img
                    className="Header__picture"
                    src={profilePicture}
                    alt="Manuel face"
                />
            </div>
            <div className="Header__description">
                <p className="Description__gretting">{cardData.greeting}</p>
                <p className="Description__status">{cardData.status}</p>
            </div>
            <div className="Hero__bio">
                <h1 className="Bio__title">Little about me</h1>
                <div className="Bio__description">
                    <p>
                        {cardData.little_bio}
                    </p>
                </div>
            </div>
            <div className="Hero__social">
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
            <div className="Hero__footer">
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

export default Hero;
