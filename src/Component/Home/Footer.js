import React from "react";
import "./Footer.css";
import socialData from "../../data/Home/SocialData";

function Footer(props) {
  return (
    <div className="Footer">
      <h1>Stay connected</h1>
      <div className="Footer__social">
        {socialData.map(item => (
          <a
            className={item.className}
            href={item.dir}
            key={item.key}
            target="_blank"
            rel="noopener noreferrer"
          ><span>Read more</span></a>
        ))}
      </div>

      <div className="Sign">
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
      </div >
    </div >
  );
}

export default Footer;
