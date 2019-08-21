import React from "react";
import "./CardContact.css";
import { Link } from "react-router-dom";

import imageConnections from "../../images/Contact/connection.webp";
import imageTelegram from "../../images/Contact/telegram.webp";
import imageEmail from "../../images/Contact/mail.webp";
import dataSchedule from "../../data/Contact/ContactData";

function CardContact(props) {
  return (
    <div className="CardContact">
      <div className="CardContact__header">
        <img src={imageConnections} alt="Connect with people" />
      </div>
      <div className="CardContact__contacts">
        <div className="Contacts__email">
          <div className="Email">
            <img src={imageEmail} alt="Email illustration" />
            <h1>Email: manuelalferezruiz [at] gmail [dot] com</h1>
          </div>
          <div className="Email__schedule">
            <p>
              <strong>Weekday: </strong>
              {dataSchedule.email.weekday}
            </p>
            <p>
              <strong>Weekend: </strong>
              {dataSchedule.email.weekend}
            </p>
          </div>
        </div>
        <div className="Contacts__telegram">
          <div className="Telegram">
            <img src={imageTelegram} alt="Telegram illustration" />
            <h1>Telegram: @manuelalferez</h1>
          </div>
          <div className="Telegram__schedule">
            <p>
              <strong>Weekday: </strong>
              {dataSchedule.telegram.weekday}
            </p>
            <p>
              <strong>Weekend: </strong>
              {dataSchedule.telegram.weekend}
            </p>
          </div>
        </div>
      </div>
      <div className="CardContact__description">
        <p>
          The mail is obfuscated for security, if you do not know how to
          interpret it does not matter,
          <Link to={`/blog/post/id=${1}`}>here</Link>
          is a post to read it.
        </p>
      </div>
    </div>
  );
}

export default CardContact;
