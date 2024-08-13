import React from "react";
import PropTypes from "prop-types";
import TeamTab from "./TeamTab";
import "./Team.css";
import InnerPage from "../../common/InnerPage";
import izzy2 from "/images/izzy2.jpg";
// import blogdetail from "/images/blog-detail.jpg";
import { FaRegUser } from "react-icons/fa";
import { SlBriefcase } from "react-icons/sl";


const TeamTabLayOut = ({ children }) => {
  return (
    <>
      <InnerPage title="kalu Ezekiel" icon={true} />
      <div className="container">
        <div className="member-card padding">
          <div className="leftside">
            <div className="img">
              <img src={izzy2} alt="" />
            </div>
          </div>
          <div className="rightside">
            <div className="desc">
              <h1>
                <FaRegUser />
                Kalu Izzy
              </h1>
              <h4>
                <SlBriefcase /> Software Developer
              </h4>
              <br />
              <TeamTab />
              <div>{children}</div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TeamTabLayOut.PropTypes = {
  children: PropTypes.node.isRequired,
};
export default TeamTabLayOut;
