import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaEnvelope, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquarePhone,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import { Logo } from "../../public/images";

const Header = () => {
  const bottomNavigation = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Market", link: "/market" },
    { title: "Gallery", link: "/gallery" },
    { title: "Members", link: "/member" },
    { title: "Heros", link: "/Heros" },
    { title: "Article", link: "/article" },
    { title: "Contact", link: "/contact" },
  ];

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
    <main>
      <div className="bg-DarkRed px-5 md:px-10 py-2 gap-3 text-white flex lg:justify-between">
        <div className="flex gap-3">
          <a href="/" className="flex items-center  gap-1 lg:gap-2 text-sm">
            <FaEnvelope />
            executive16@gmail.com
          </a>
          <a href="/" className="flex items-center  gap-1 lg:gap-2 text-sm">
            <FaSquarePhone />
            07038689968
          </a>
        </div>
        <div className="flex gap-2 md:gap-4">
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

      {/* Main Nav Starts here  */}
      <div
        className={`px-5 md:px-10 py-3 bg-white flex justify-between items-center !z-50 shadow-md ${active
          ? "fixed top-0 left-0 border-b-2 border-b-DarkRed transition-all duration-200 "
          : ""
          }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="The Executive16 Logo"
            className="w-[50%] md:w-[30%] lg:w-[20%]"
          />
        </Link>
        <div className="text-4xl block lg:hidden ">
          {!menu ? (
            <CgMenuGridR onClick={() => setMenu(true)} />
          ) : (
            <MdCancel onClick={() => setMenu(false)} />
          )}
        </div>
        <div
          className={
            menu
              ? "flex flex-col absolute left-0 px-6 py-9 top-[15%] md:top-[100%] duration-75 shadow-md w-full  bg-white z-10"
              : "hidden lg:flex"
          }
        >
          <nav
            className={
              menu
                ? "flex flex-col gap-6"
                : "lg:flex lg:flex-row items-center lg:gap-6"
            }
          >
            {bottomNavigation.map(({ title, link }) => (
              <NavLink
                to={link}
                key={title}
                className={`uppercase relative md:inline-flex text-sm text-Black font-bold duration-200 overflow-hidden group ${location.pathname === link ? " font-bold" : ""
                  }`}
                onClick={() => setMenu(false)}
              >
                {title}
                <span className="inline-flex w-full h-[1.5px] bg-DarkRed absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
              </NavLink>
            ))}
            <Button
              title="get started"
              path="/account"
              // icon={<FaLongArrowAltRight />}
              className="bg-DarkRed text-white md:inline-flex"
              onClick={() => setMenu(false)}
            />
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Header;
