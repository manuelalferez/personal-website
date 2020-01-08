import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

import imageConnections from "../../images/Contact/connection.webp";
import imageTelegram from "../../images/Contact/telegram.webp";
import imageEmail from "../../images/Contact/mail.webp";
import dataSchedule from "../../data/Contact/ContactData";

function Contact(props) {
    return (
        <div className="Contact">
            <h1 className="Contact__title">Contact</h1>
            <div className="Contact__message">Due to productivity reasons I am answering emails once a week. If you need
                to speak with me urgently (please, assess if it is really urgent) and you cannot
                wait, do not hesitate to write to me on Telegram. The times in which I will answer each canal will be:
                </div>
                <h1 className="Email">Email: manuelalferezruiz [at] gmail [dot] com</h1>
            <div className="Email__schedule">
                <p>
                    <strong>Monday: </strong>
                    {dataSchedule.email.monday}
                </p>
            </div>
                <h1 className="Telegram">Telegram: @manuelalferez</h1>
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

            <div className="Contact__description">
                <p>
                    The mail is obfuscated for security, if you do not know how to
                    interpret it does not matter,
          <Link to={`/blog/post/id=${1}`}>here</Link>
                    is a post to read it.
        </p>
            </div>
        </div >
    );
}

export default Contact;
