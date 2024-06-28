import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/images/logo.png";
import "./style.css";
import { Nav } from "../../utilis/data";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { MdCancel } from "react-icons/md";


const Header = () => {
 const [menu, setMenu] = useState(true)
  const showNav = () => {
    setMenu(false)
  }
  const hideNav = () => {
    setMenu(true);

  }
  
  return (
    <div className="header">
      <img src={Logo} alt="The Executive16 Logo" className="logo" />
      <div className="hambuger">
        {menu ? (
          <CgMenuGridR onClick={showNav} />
        ) : (
          <MdCancel onClick={hideNav} />
        )}
      </div>
      <div className="m-nav">
        <nav>
          {Nav.map((nav) => (
            <NavLink to={nav.path} key={nav.title} className="navLink">
              {nav.title}
            </NavLink>
          ))}
        </nav>
        <Button
          title="get started"
          path="/member"
          icon={<FaLongArrowAltRight />}
          bg="bgred"
        />
      </div>
    </div>
  );
};

export default Header;
