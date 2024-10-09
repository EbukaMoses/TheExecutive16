import React from "react";
import InnerPage from "../../common/InnerHero/InnerPage";
import Divider from "../../common/Button/Divider";
import HeadingThree from "../../common/Headings/HeadingThree";
import HeadingOne from "../../common/Headings/HeadingOne";
import { FaUsers } from "react-icons/fa6";
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
        <br />
        <div class="teamcontent grid6 ">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </div>
    </section>
  );
};

export default Team;
