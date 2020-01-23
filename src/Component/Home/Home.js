import React from "react";
import "./Home.css";
import profilePicture from "../../images/Home/avatar.webp";
import data from "../../data/Home/data";
import socialData from "../../data/Home/SocialData";

function Home(props) {
  return (
    <div className="Home">
      <div className="Picture__Status">
        <img
          className="Picture"
          src={profilePicture}
          alt="Manuel face"
        />
        <p className="Status">{data.status}</p>
      </div>

      <div className="Home__Description">
        <p>{data.description}</p>
      </div>

      <div className="Social-graper">
        <div className="Social">
          {socialData.map(item => (
            <a
              className={item.className}
              href={item.dir}
              key={item.key}
              target="_blank"
              rel="noopener noreferrer"
            > <span></span></a>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
