import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <form action="https://contactform.dk/manuelalferezruiz@gmail.com" className="Form">
        <h1 className="Form__title">Send me a message <span role="img" aria-label="smile">😊</span></h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email <span className="Form__banner">(optional)</span></label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
        <label htmlFor="message" >Message</label>
        <textarea type="message" name="message" className="Form__message" />
        <button type="submit" className="Form__send">Send</button>
      </form>
    </div>
  );
}

export default Contact;
