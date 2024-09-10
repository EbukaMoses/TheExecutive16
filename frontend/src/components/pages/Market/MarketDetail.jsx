import React from "react";
import "./Market.css";
import bizflyer from "/images/g3.jpg";
import InnerPage from "../../common/InnerHero/InnerPage";
import { IoMdLocate } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import {
  FaSquarePhone,
  FaRegEnvelope,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const MarketDetail = () => {
  return (
    <section>
      <InnerPage title="Market Place" icon={true} />
      <div className="container padding">
        <div className="market-detail-content">
          <img src={bizflyer} alt="" />
          <div className="market-info">
            <div className="market-name">
              <h1>Business name</h1>
              <h4>What the Business is into</h4>
              <span>
                <FaRegUser /> Ebuka Moses
              </span>
            </div>
            <div className="contact">
              <ul>
                <li>
                  <a href="">
                    <MdOutlinePhoneAndroid />
                    07038689968
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaRegEnvelope />
                    executive16@gmail.com
                  </a>
                </li>
                <li>
                  <a href="">
                    <IoMdLocate />
                    Abuja
                  </a>
                </li>
              </ul>
            </div>
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
            <hr />
            <div className="market-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                qui velit, enim accusantium ratione vitae provident tenetur
                perspiciatis saepe magni aperiam doloremque, at blanditiis
                libero sint ab animi! Quia exercitationem a quam reiciendis modi
                beatae eum eveniet, assumenda sed corrupti natus cupiditate
                laborum neque? Sequi maiores, temporibus exercitationem quia
                labore cum minus reprehenderit facilis quo rerum adipisci
                quisquam pariatur quae quasi corrupti est tempore cumque
                reiciendis eligendi magni fugit, quas nobis. Sapiente autem et
                omnis. Natus, blanditiis aliquam, quod dolor provident esse
                quidem, quae ex vero veniam nisi optio. Esse possimus deserunt
                praesentium necessitatibus molestias voluptas quia fugit ea
                quod!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDetail;
