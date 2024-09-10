import React from "react";
import "./Team.css";
import InnerPage from "../../common/InnerHero/InnerPage";
import Divider from "../../common/Button/Divider";
import HeadingThree from "../../common/Headings/HeadingThree";
import HeadingOne from "../../common/Headings/HeadingOne";
import izzy2 from "/images/izzy2.jpg";
import { IoLocation } from "react-icons/io5";
import { FaUsers, FaBriefcase } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MemberCard from "../../common/Card/MemberCard";

const Team = () => {
  return (
    <section className="team">
      <InnerPage title="Our Class Members" icon={<FaUsers />} />;
      <div className="container padding">
        <div className="top flex-column justify-center item-center">
          <div className="Hflex">
            <Divider color="bgred" />
            <HeadingThree title="Our Class List" color="textred" />
            <Divider color="bgred" />
          </div>
          <HeadingOne title="Our Members" color="textblack" />
        </div>

        <div class="teamcontent grid4 ">
          <MemberCard />
        </div>
      </div>
    </section>
  );
};

export default Team;
