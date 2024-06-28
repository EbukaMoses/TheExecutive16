import React from "react";
import logo from "/images/logo2.png";
import poka from "/images/slider.jpg";
import HeadingTwo from "./HeadingTwo";
import {
  FaSquarePhone,
  FaEnvelope,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footercover">
      <section className="footer">
        <div className="container">
          <div className="grid4">
            <div className="footer-box">
              <div className="footer-logo">
                <img src={logo} alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed
                diam nonu mmy nibh euismod tincid
              </p>
            </div>
            <div className="footer-box">
              <HeadingTwo title="Address" color="textwhite" />
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Market Place</a>
                </li>
                <li>
                  <a href="/">Members</a>
                </li>
                <li>
                  <a href="/">Gallery</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <HeadingTwo title="Address" color="textwhite" />
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Market Place</a>
                </li>
                <li>
                  <a href="/">Members</a>
                </li>
                <li>
                  <a href="/">Gallery</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-box">
              <HeadingTwo title="Hola Us!" color="textwhite" />
              <ul className="contact">
                <li>
                  <a href="/">
                    <FaEnvelope />
                    executive16@gmail.com
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaSquarePhone />
                    07038689968
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
          <br />
          <br />
          <hr />
          <div className="copyright">
            <span>
              copyright &copy; Unziki Business Administration class of 2016.
              Built by <a href="">Ebuka Moses</a> in loving memory of
              <a href=""> Pokapikin</a>
            </span>
          </div>
        </div>
        <div className="container footer-popup">
          <div className="popup-card">
            <img src={poka} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              quod error dignissimos. Amet tenetur voluptate quis autem beatae
              pariatur? Autem nobis ex explicabo? Incidunt dolores rerum dolorum
              aperiam dolorem asperiores, dignissimos minus eaque, esse maiores
              in! Quas vel necessitatibus libero ratione id aliquid, dicta
              voluptatem, explicabo architecto mollitia impedit voluptas sequi
              asperiores amet deleniti commodi debitis quis est facere dolorem
              ut magnam eum soluta! Rerum aperiam quaerat magnam unde
              dignissimos ex optio, nobis deleniti, sint cupiditate incidunt
              quidem. Id quo sunt adipisci, cum cumque numquam mollitia
              consectetur illo, eos alias dolor modi tempore eius, enim eum sint
              aperiam? Illo, quibusdam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
