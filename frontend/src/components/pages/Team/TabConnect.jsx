import React from "react";
import TeamTabLayOut from "./TeamTabLayOut";
import { IoMdLocate } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import {
  FaSquarePhone,
  FaRegEnvelope,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const TabConnect = () => {
  return (
    <TeamTabLayOut>
      <div>
        <div className="contact">
          <a href="">
            <MdOutlinePhoneAndroid />
            07038689968
          </a>
          <a href="">
            <FaRegEnvelope />
            executive16@gmail.com
          </a>
          <a href="">
            <IoMdLocate />
            Abuja
          </a>
        </div>
        <hr className="hr" />
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
    </TeamTabLayOut>
  );
};

export default TabConnect;
