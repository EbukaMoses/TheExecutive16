import React from "react";
import Divider from "../../common/Button/Divider";
import HeadingThree from "../../common/Headings/HeadingThree";
import HeadingTwo from "../../common/Headings/HeadingTwo";
import HeadingOne from "../../common/Headings/HeadingOne";
import bizdp from "/images/g1.jpg";
import bizflyer from "/images/g3.jpg";
import bizlogo from "/images/g2.png";
import MarketCard from "../../common/Card/MarketCard";

const HMarket = () => {
  return (
    <section className=" darkgray">
      <div className="container HMarket padding">
        <div className="top flex-column justify-center item-center">
          <div className="Hflex">
            <Divider color="bgred" />
            <HeadingThree title="Market place" color="textred" />
            <Divider color="bgred" />
          </div>
          <HeadingOne title="Our Members Business" color="textblack" />
        </div>

        <div className="grid4">
          <MarketCard
            flyer={bizdp}
            logo={bizlogo}
            title="Gigonest Technology"
            subtitle="Web Design & Development, Graphic Design"
          />
          <MarketCard
            flyer={bizflyer}
            logo={bizlogo}
            title="Gigonest Technology"
            subtitle="Web Design & Development, Graphic Design"
          />
          <MarketCard
            flyer={bizdp}
            logo={bizlogo}
            title="Gigonest Technology"
            subtitle="Web Design & Development, Graphic Design"
          />
          <MarketCard
            flyer={bizflyer}
            logo={bizlogo}
            title="Gigonest Technology"
            subtitle="Web Design & Development, Graphic Design"
          />
        </div>
      </div>
    </section>
  );
};

export default HMarket;
