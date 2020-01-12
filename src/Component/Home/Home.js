import React from "react";
import "./Home.css";
import profilePicture from "../../images/Home/job.svg";
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

      <p className="Home__Description">{data.description}</p>

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
