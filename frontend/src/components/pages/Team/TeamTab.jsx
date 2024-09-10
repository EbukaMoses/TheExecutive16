import React from "react";
import { Link, useLocation } from "react-router-dom";

const TeamTab = () => {
  const location = useLocation();

  return (
    <div className="tab-navigation">
      <ul className="tab-menu">
        <Link to="/team-member">
          <li
            className={`tab-btn ${
              location.pathname === "/team-member" ? "active" : ""
            }`}
          >
            About
          </li>
        </Link>
        <Link to="/team-member/education">
          <li
            className={`tab-btn ${
              location.pathname === "/team-member/education" ? "active" : ""
            }`}
          >
            Education
          </li>
        </Link>
        <Link to="/team-member/business">
          <li
            className={`tab-btn ${
              location.pathname === "/team-member/business" ? "active" : ""
            }`}
          >
            Business
          </li>
        </Link>
        <Link to="/team-member/hobby">
          <li
            className={`tab-btn ${
              location.pathname === "/team-member/hobby" ? "active" : ""
            }`}
          >
            Hobbies
          </li>
        </Link>
        <Link to="/team-member/connect">
          <li
            className={`tab-btn ${
              location.pathname === "/team-member/connect" ? "active" : ""
            }`}
          >
            Connect
          </li>
        </Link>
        <Link to="/team-member/blog">
          <li
            className={`tab-btn ${
              location.pathname === "/team-member/blog" ? "active" : ""
            }`}
          >
            Blog
          </li>
        </Link>
        {/* <Link to="">
          <li className={`tab-btn ${
                location.pathname === "/team-member" ? "active" : ""
              }`}></li>
        </Link> */}
      </ul>
    </div>
  );
};

export default TeamTab;
