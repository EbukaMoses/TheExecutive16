import React from "react";
import Divider from "../../common/Divider";
import HeadingThree from "../../common/HeadingThree";
import HeadingTwo from "../../common/HeadingTwo";
import HeadingOne from "../../common/HeadingOne";
import bizdp from "/images/g1.jpg";
import bizflyer from "/images/g3.jpg";
import bizlogo from "/images/g2.png";
import Marketcard from "../../common/Marketcard";

const HMarket = () => {
  return (
    <section className="HMarket darkgray">
      <div className="container padding">
        <div className="top flex-column justify-center item-center">
          <div className="Hflex">
            <Divider color="bgred" />
            <HeadingThree title="Market place" color="textred" />
            <Divider color="bgred" />
          </div>
          <HeadingOne title="Our Members Business" color="textblack" />
        </div>

        <div className="grid4">
          <Marketcard
            flyer={bizdp}
            logo={bizlogo}
            title="Gigonest Technology"
            subtitle="Web Design & Development, Graphic Design"
          />
          <Marketcard
            flyer={bizflyer}
            logo={bizlogo}
            title="Gigonest Technology"
            subtitle="Web Design & Development, Graphic Design"
          />
          <Marketcard
            flyer={bizdp}
            logo={bizlogo}
            title="Gigonest Technology"
            subtitle="Web Design & Development, Graphic Design"
          />
          <Marketcard
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
