import React from "react";
import "./Heroes.css";
import InnerPage from "../../common/InnerHero/InnerPage";
import Divider from "../../common/Button/Divider";
import HeadingThree from "../../common/Headings/HeadingThree";
import HeadingOne from "../../common/Headings/HeadingOne";
import slider from "/images/slider.jpg";
import { FaHeartBroken } from "react-icons/fa";
import {
  // FaSquarePhone,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa6";

const Heroes = () => {
  return (
    <section className="fallen-heroes">
      <InnerPage title="Fallen Heroes" icon={<FaHeartBroken />} />;
      <div className="container padding">
        <div className="top flex-column justify-center item-center">
          <div className="Hflex">
            <Divider color="bgred" />
            <HeadingThree title="Memories" color="textred" />
            <Divider color="bgred" />
          </div>
          <HeadingOne title="Our Love Ones 💔" color="textblack" />
        </div>

        <div class="herocontent grid4">
          <div class="herocard">
            <div class="heroimg">
              <img src={slider} alt="hero" />
            </div>
            <div className="hero-details flex-column">
              <h3>Chinedu Ezemenari</h3>
              <span>
                <i>Natural Death</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroes;
