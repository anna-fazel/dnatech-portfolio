import React from "react";
import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import { MdEmail, MdPermPhoneMsg, MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
  <div className="contactPage">

  
  <div className="c-header">
  <h1>Contact Us</h1>
  </div>

    <div className="contact-form">
      <div className="c-left">
        <h2 className="c-title">Get In Touch Now</h2>
        <div className="c-info">
          <div className="c-icons"><IconContext.Provider
            value={{
              color: "red",
              size: "1.2rem",
            }}
          >
            <div>
              <MdPermPhoneMsg /> +61 413 77 63 44
            </div>
          </IconContext.Provider></div>
          <div className="c-icons"><IconContext.Provider
            value={{
              color: "blue",
              size: "1.2rem",
              
            }}
          >
            <div>
              <MdEmail /> info@dnatecnology.com.au
            </div>
          </IconContext.Provider></div>
          <div className="c-icons"><IconContext.Provider
            value={{
              color: "orange",
              size: "1.2rem",
            }}
          >
            <div>
              <MdLocationOn /> 5 Network Place North Ryde NSW Australia
            </div>
          </IconContext.Provider></div>
          
          
          
        </div>
      </div>
      <div className="c-right">
        <form >
          <h2 className="c-title">Let Us Know How We Can Help</h2>
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" className="input" name="name" required />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            className="input"
            name="email"
            required
          />
          <label htmlFor="msg">Message*</label>
          <textarea name="msg" id="msg" cols="20" rows="4" required></textarea>
          <button className="form-button">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
