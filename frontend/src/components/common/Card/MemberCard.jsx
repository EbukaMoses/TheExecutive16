import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { Link } from "react-router-dom";
import izzy2 from "/images/izzy2.jpg";

const MemberCard = () => {
  return (
    <>
      <Link to="/team-member">
        <div class="teamcard">
          <div class="teamimg">
            <img src={izzy2} alt="team" />
          </div>
          <div className="team-details flex-column">
            <h3>Ebuka Moses</h3>
            <a href="" className="Hflex item-center">
              <FaBriefcase /> &nbsp; <span>Software Developer</span>
            </a>
            <a href="" className="Hflex item-center">
              <IoLocation /> &nbsp; <span>Lagos</span>
            </a>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MemberCard;
