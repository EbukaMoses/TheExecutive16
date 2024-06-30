import React from "react";
import Divider from "../../common/Divider";
import HeadingThree from "../../common/HeadingThree";
import HeadingOne from "../../common/HeadingOne";
import HeadingTwo from "../../common/HeadingTwo";
import mike from "/images/mike.jpg";
import izzy from "/images/izzy.jpg";
import chukz from "/images/chukz.jpg";
import ameh from "/images/ameh.jpg";
import ify from "/images/ify.jpg";
import precious from "/images/precious.jpg";

const WhatWeHave = () => {
  return (
    <section>
      <div className="container padding">
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
                <HeadingTwo title="Mike Uchendu" color="textblack" />
                <HeadingThree title="Course Rep" color="textblack" />
              </div>
            </div>
            <div className="whowehavecard">
              <img src={precious} alt="whow" />
              <div className="details flex-column justify-center item-center">
                <HeadingTwo title="Ihuoma" color="textblack" />
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
                <HeadingTwo title="Kalu Ezekiel" color="textblack" />
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
