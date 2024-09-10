import React from "react";
import Divider from "../../common/Button/Divider";
import HeadingThree from "../../common/Headings/HeadingThree";
import HeadingOne from "../../common/Headings/HeadingOne";
import HeadingTwo from "../../common/Headings/HeadingTwo";
import mike from "/images/mike.jpg";
import izzy from "/images/izzy.jpg";
import chukz from "/images/chukz.jpg";
import ameh from "/images/ameh.jpg";
import ify from "/images/ify.jpg";
import ihuoma from "/images/ihuoma2.jpg";

const WhatWeHave = () => {
  return (
    <section>
      <div className="whowehave container padding">
        <div className="top flex-column justify-center item-center">
          <div className="Hflex">
            <Divider color="bgred" />
            <HeadingThree title="People We Value" color="textred" />
            <Divider color="bgred" />
          </div>
          <HeadingOne title="Our MVP " color="textblack" />
        </div>
        <div className="bottom">
          <div className="grid3">
            <div className="whowehavecard">
              <img src={mike} alt="whow" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo title="Comrade Mike Uchendu" color="textblack" />
                <HeadingThree title="Course Rep" color="textblack" />
              </div>
            </div>
            <div className="whowehavecard">
              <img src={ihuoma} alt="whow" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo title="Ihuoma Kamalu" color="textblack" />
                <HeadingThree title="Ass. Course Rep" color="textblack" />
              </div>
            </div>
            <div className="whowehavecard">
              <img src={chukz} alt="whow" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo
                  title="Comrade Chukwudi Ifejika"
                  color="textblack"
                />
                <HeadingThree title="Dept. President" color="textblack" />
              </div>
            </div>
            <div className="whowehavecard">
              <img src={ameh} alt="whow" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo title="Hon. Ameh Joseph" color="textblack" />
                <HeadingThree title="Student Rep. Council" color="textblack" />
              </div>
            </div>
            <div className="whowehavecard">
              <img src={ify} alt="whow" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo title="Hon. Ifunanya Okoye" color="textblack" />
                <HeadingThree title="Student Rep. Council" color="textblack" />
              </div>
            </div>
            <div className="whowehavecard">
              <img src={izzy} alt="whow" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo title="Comrade Kalu Ezekiel" color="textblack" />
                <HeadingThree
                  title="Best Graduating Student"
                  color="textblack"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeHave;
