import React from "react";
import "./Contact.css";
import Card from '../Card/Card';
import CardContent from "./CardContact";

function Contact(props) {
  return (
    <div className="Contact">
      <Card content={<CardContent/>} />
    </div>
  );
}

export default Contact;
