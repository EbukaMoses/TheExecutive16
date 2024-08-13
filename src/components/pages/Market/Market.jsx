import React from "react";
import "./Market.css";
import InnerPage from "../../common/InnerPage";
import { FaShoppingBag } from "react-icons/fa";
import Divider from "../../common/Divider";
import HeadingThree from "../../common/HeadingThree";
import HeadingOne from "../../common/HeadingOne";
import bizdp from "/images/g1.jpg";
import bizflyer from "/images/g3.jpg";
import bizlogo from "/images/g2.png";
import Marketcard from "../../common/Marketcard";
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
            <Marketcard
              flyer={bizdp}
              logo={bizlogo}
              title="Gigonest Technology"
              subtitle="Web Design & Development, Graphic Design"
            />
          </Link>
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
          <Link to="/market-detail">
            <Marketcard
              flyer={bizdp}
              logo={bizlogo}
              title="Gigonest Technology"
              subtitle="Web Design & Development, Graphic Design"
            />
          </Link>
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

export default Market;
