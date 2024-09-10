import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "/images/logo.png";
import { Nav } from "../../../utilis/data";
import Button from "../Button/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import {
  FaEnvelope,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquarePhone,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  
  const location = useLocation();

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className="top-header">
        <div className="phone">
          <span>
            <a href="/">
              <FaEnvelope />
              executive16@gmail.com
            </a>
          </span>

          <span>
            <a href="/">
              <FaSquarePhone />
              07038689968
            </a>
          </span>
        </div>
        <div className="social-icons">
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
      <div className={`header ${active ? "activenav" : ""}`}>
        <Link to="/">
          <img src={Logo} alt="The Executive16 Logo" className="logo" />
        </Link>
        <div className="hambuger">
          {!menu ? (
            <CgMenuGridR onClick={() => setMenu(true)} />
          ) : (
            <MdCancel onClick={() => setMenu(false)} />
          )}
        </div>
        <div className={menu ? "m-nav display" : "m-nav"}>
          <nav className={menu ? "display" : ""}>
            {Nav.map((nav) => (
              <NavLink
                to={nav.path}
                key={nav.title}
                className={`navLink ${
                  location.pathname === nav.path ? "active" : ""
                }`}
                onClick={() => setMenu(false)}
              >
                {nav.title}
              </NavLink>
            ))}
            <Button
              title="get started"
              path="/member"
              icon={<FaLongArrowAltRight />}
              bg="bgred"
              onClick={() => setMenu(false)}
            />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
