import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaBriefcase, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import izzy2 from "/images/izzy2.jpg";
import mike from "/images/mike.jpg";

const MemberCard = () => {
  return (
    <>
      <Link to="/team-member">
        <div class="teamcard">
          <div class="teamimg">
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
            <img src={mike} alt="team" />
          </div>
          <div className="team-details flex-column">
            <h3>Ebuka Moses</h3>
            <span className="Hflex item-center">
              {/* <FaBriefcase /> &nbsp;  */}
              <span>Software Developer</span>
            </span>
            <span className="Hflex item-center">
              {/* <IoLocation /> &nbsp;  */}
              <span>Lagos</span>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MemberCard;
