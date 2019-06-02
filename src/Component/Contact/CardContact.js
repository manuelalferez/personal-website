import React from "react";
import "./CardContact.css";
import imageConnections from "../../images/Contact/connection.svg";
import imageTelegram from "../../images/Contact/telegram.svg";
import imageEmail from "../../images/Contact/mail.svg";
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
            <img src={imageEmail} alt='Email illustration'/>
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
            <img src={imageTelegram} alt='Telegram illustration'/>
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
          <a
            href="https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-05-31"
            target="_blank"
            rel="noopener noreferrer"
          >here</a>
          is a post to read it.
        </p>
      </div>
    </div>
  );
}

export default CardContact;
