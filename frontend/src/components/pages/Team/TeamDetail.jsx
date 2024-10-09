import React, { useState } from "react";
// import "./Team.css";
import InnerPage from "../../common/InnerHero/InnerPage";
import izzy2 from "/images/izzy2.jpg";
import blogdetail from "/images/blog-detail.jpg";
import { IoMdLocate } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
// import {
//   FaSquarePhone,
//   FaRegEnvelope,
//   FaSquareFacebook,
//   FaSquareInstagram,
//   FaSquareXTwitter,
//   FaLinkedin,
// } from "react-icons/fa6";
import TeamTabLayOut from "./TeamTabLayOut";
import TabAbout from "./TabAbout";
import TabEdu from "./TabEdu";
import TabBiz from "./TabBiz";
import TabHobby from "./TabHobby";
import TabConnect from "./TabConnect";
import TabBlog from "./TabBlog";
import { FaSkype } from "react-icons/fa";
import {
  FaSquarePhone,
  FaEnvelope,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import mike from "/images/mike.jpg";

const TeamDetail = () => {
  const [tab, setTab] = useState("0");

  const memberTab = (props) => {
    switch (props) {
      case "0":
        return <TabAbout />;
      case "1":
        return <TabEdu />;
      case "2":
        return <TabBiz />;
      case "3":
        return <TabHobby />;
      case "4":
        return <TabConnect />;
      case "5":
        return <TabBlog />;

      default:
        return <TabAbout />;
    }
  };
  return (
    <section>
      <InnerPage title="kalu Ezekiel" icon={true} />
      <div className="container-10">
        <div className="member-card padding">
          <div className="leftside">
            <div className="img">
              <img src={mike} alt="" />
            </div>
          </div>
          <div className="rightside">
            <div className="desc">
              <h1>
                <FaUserCircle />
                Kalu Izzy
              </h1>
              <h4>
                <SlBriefcase /> Software Developer
              </h4>
              <h4>
                <IoMdLocate />
                Abuja
              </h4>
              <hr className="hr" />
              <div className="socials">
                <a href="">
                  <FaSquarePhone />
                </a>
                <a href="">
                  <FaEnvelope />
                </a>
                <a href="">
                  <FaSkype />
                </a>
                <a href="/">
                  <FaSquareFacebook />
                </a>
                <a href="/">
                  <FaSquareInstagram />
                </a>
                <a href="/">
                  <FaSquareXTwitter />
                </a>
                <a href="/">
                  <FaLinkedin />
                </a>
              </div>
              <hr className="hr" />
              <div className="hobby">
                <h5>Hobby:</h5>
                <span>Traveling</span>
                <span>Reading</span>
                <span>Singing</span>
                <span>Making Friends</span>
                <span>Browsing</span>
                <span>Singing</span>
                <span>Cooking</span>
                <span>Drawing</span>
                <span>Dancing</span>
                <span>Sport</span>
              </div>
            </div>
            <br />

            <div className="tab-navigation">
              <ul className="tab-menu">
                <Link to="" onClick={() => setTab("0")}>
                  <li className={`tab-btn ${tab === "0" ? "active" : ""}`}>
                    About
                  </li>
                </Link>
                {/* <Link to="" onClick={() => setTab("1")}>
                  <li className={`tab-btn ${tab === "1" ? "active" : ""}`}>
                    Education
                  </li>
                </Link> */}
                <Link to="" onClick={() => setTab("2")}>
                  <li className={`tab-btn ${tab === "2" ? "active" : ""}`}>
                    Business
                  </li>
                </Link>
                <Link to="" onClick={() => setTab("5")}>
                  <li className={`tab-btn ${tab === "5" ? "active" : ""}`}>
                    Blog
                  </li>
                </Link>
                {/* <Link to="" onClick={() => setTab("4")}>
                  <li className={`tab-btn ${tab === "4" ? "active" : ""}`}>
                    Connect
                  </li>
                </Link> */}
              </ul>
              <div>{memberTab(tab)}</div>
            </div>
          </div>
        </div>

        {/* <div className="member-card padding">
          <div className="img">
            <div className="img">
              <img src={izzy2} alt="" />
            </div>

            <div className="contact">
              <a href="">
                <MdOutlinePhoneAndroid />
                07038689968
              </a>
              <a href="">
                <FaRegEnvelope />
                executive16@gmail.com
              </a>
              <a href="">
                <IoMdLocate />
                Abuja
              </a>
            </div>
            <hr className="hr" />
            <div className="socials">
              <a href="/">
                <FaSquareFacebook />
              </a>
              <a href="/">
                <FaSquareInstagram />
              </a>
              <a href="/">
                <FaSquareXTwitter />
              </a>
              <a href="/">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="desc">
            <h1>
              <FaRegUser />
              Kalu Izzy
            </h1>
            <h4>
              <SlBriefcase /> Software Developer
            </h4>
            <br />
            <div className="tab-navigation">
              <ul className="tab-menu">
                <Link to="" onClick={() => setTab("0")}>
                  <li className={`tab-btn ${tab === "0" ? "active" : ""}`}>
                    About
                  </li>
                </Link>
                <Link to="">
                  <li className={`tab-btn ${tab === "1" ? "active" : ""}`}>
                    Education
                  </li>
                </Link>
                <Link to="">
                  <li className={`tab-btn ${tab === "2" ? "active" : ""}`}>
                    Business
                  </li>
                </Link>
                <Link to="">
                  <li className={`tab-btn ${tab === "3" ? "active" : ""}`}>
                    Hobbies
                  </li>
                </Link>
                <Link to="">
                  <li className={`tab-btn ${tab === "4" ? "active" : ""}`}>
                    Connect
                  </li>
                </Link>
                <Link to="">
                  <li className={`tab-btn ${tab === "5" ? "active" : ""}`}>
                    Blog
                  </li>
                </Link>
              </ul>
            </div>
            <br />
            <div>{memberTab(tab)}</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TeamDetail;
