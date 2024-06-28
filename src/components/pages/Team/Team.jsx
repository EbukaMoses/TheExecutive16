import React from "react";
import "./Team.css";
import InnerPage from "../../common/InnerPage";
import Divider from "../../common/Divider";
import HeadingThree from "../../common/HeadingThree";
import HeadingOne from "../../common/HeadingOne";
import izzy2 from "/images/izzy2.jpg";
import { IoLocation } from "react-icons/io5";
import {
  FaUsers,
  FaBriefcase,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

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
          <Link to="/team-member">
            <div class="teamcard">
              <div class="teamimg">
                <img src={izzy2} alt="team" />
              </div>
              <div className="team-details flex-column">
                <h3>Ebuka Moses</h3>
                <a href="" className="flex item-center">
                  <FaBriefcase /> &nbsp; <span>Software Developer</span>
                </a>
                <a href="" className="flex item-center">
                  <IoLocation /> &nbsp; <span>Lagos</span>
                </a>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
