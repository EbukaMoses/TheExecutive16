import React from "react";
import "./Contact.css";
import InnerPage from "../../common/InnerPage";
import Divider from "../../common/Divider";
import HeadingThree from "../../common/HeadingThree";
import HeadingOne from "../../common/HeadingOne";
import { MdContacts } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import {
  FaUser,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  FaSquarePhone,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import Button from "../../common/Button";

const Contact = () => {
  return (
    <section className="contactus">
      <InnerPage title="Contact Us" icon={<MdContacts />} />
      <div className="container padding">
        <div className="top flex-column justify-center item-center">
          <div className="Hflex">
            <Divider color="bgred" />
            <HeadingThree title="Halo Us" color="textred" />
            <Divider color="bgred" />
          </div>
          <HeadingOne title="Get Intouch" color="textblack" />
        </div>

        <div className="contactcard">
          <div className="left">
            <form>
              <div className="input-group">
                <FaUser />
                <input type="text" value="" placeholder="" />
              </div>
              <div className="input-group">
                <FaEnvelope />
                <input type="text" value="" placeholder="" />
              </div>
              <div className="input-group">
                <FaPhoneSquareAlt />
                <input type="text" value="" placeholder="" />
              </div>
              <div className="input-group">
                <FaMessage className="message" />
                <textarea name="" id="" placeholder=""></textarea>
              </div>
              <Button title="Submit" icon={<FaTelegramPlane />} bg="bgred" />
            </form>
          </div>

          <div className="right">
            <ul className="contact">
              <li>
                <a href="/">
                  <FaSquarePhone />
                  07038689968
                </a>
              </li>
              <li>
                <a href="/">
                  <FaEnvelope />
                  executive16@gmail.com
                </a>
              </li>
            </ul>
            <div className="socials">
              <a href="/">
                <FaSquareFacebook />
              </a>
              <a href="/">
                <FaSquareInstagram />
              </a>
              <a href="/">
                <FaSquareXTwitter />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
