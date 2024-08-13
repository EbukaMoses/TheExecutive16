import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/images/logo.png";
import "./style.css";
import { Nav } from "../../utilis/data";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
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
        <nav>
          {Nav.map((nav) => (
            <NavLink
              to={nav.path}
              key={nav.title}
              className="navLink"
              onClick={() => setMenu(false)}
            >
              {nav.title}
            </NavLink>
          ))}
        </nav>
        <Button
          title="get started"
          path="/member"
          icon={<FaLongArrowAltRight />}
          bg="bgred"
          onClick={() => setMenu(false)}
        />
      </div>
    </div>
  );
};

export default Header;
