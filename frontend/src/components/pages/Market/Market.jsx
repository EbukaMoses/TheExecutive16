import React from "react";
import "./Market.css";
import InnerPage from "../../common/InnerHero/InnerPage";
import { FaShoppingBag } from "react-icons/fa";
import Divider from "../../common/Button/Divider";
import HeadingThree from "../../common/Headings/HeadingThree";
import HeadingOne from "../../common/Headings/HeadingOne";
import bizdp from "/images/g1.jpg";
import bizflyer from "/images/g3.jpg";
import bizlogo from "/images/g2.png";
import MarketCard from "../../common/Card/MarketCard";
import { Link, useNavigate } from "react-router-dom";

const Market = () => {
  return (
    <section>
      <InnerPage title="Market Place" icon={<FaShoppingBag />} />
      <div className="container padding">
        <div className="top flex-column justify-center item-center">
          <div className="Hflex">
            <Divider color="bgred" />
            <HeadingThree title="Market place" color="textred" />
            <Divider color="bgred" />
          </div>
          <HeadingOne title=" Business of our Members!" color="textblack" />
        </div>

        <div className="marketcontent grid4">
          <Link to="/market-detail">
            <MarketCard
              flyer={bizdp}
              logo={bizlogo}
              title="Gigonest Technology"
              subtitle="Web Design & Development, Graphic Design"
            />
          </Link>
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
          <Link to="/market-detail">
            <MarketCard
              flyer={bizdp}
              logo={bizlogo}
              title="Gigonest Technology"
              subtitle="Web Design & Development, Graphic Design"
            />
          </Link>
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

export default Market;
