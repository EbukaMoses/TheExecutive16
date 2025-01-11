// import { useState } from "react";
// import { TiThMenu } from "react-icons/ti";
import { PiSpeedometerFill, PiUsersFourFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { BsChatLeftHeartFill, BsFillBriefcaseFill } from "react-icons/bs";
import { BiSolidMessageDetail, BiSolidMessageDots } from "react-icons/bi";

import { Link, useLocation } from "react-router-dom";
// import { NavItems } from "../utils/data";
import { NavItem } from "../../types";
import { GiBrokenHeart } from "react-icons/gi";
import { SiProgress, SiHyperskill } from "react-icons/si";
import { TbLockFilled } from "react-icons/tb";
import { FaComments } from "react-icons/fa6";

export const NavItems = [
  {
    title: "Dashboard",
    icon: PiSpeedometerFill,
    path: "/",
  },
  {
    title: "Profile",
    icon: FaUserCircle,
    path: "/profile",
  },
  {
    title: "Business",
    icon: BsFillBriefcaseFill,
    path: "/business",
  },
  {
    title: "Post",
    icon: BiSolidMessageDetail,
    path: "/post",
  },
  {
    title: "Post Category",
    icon: BiSolidMessageDetail,
    path: "/postcategory",
  },
  {
    title: "Program",
    icon: SiProgress,
    path: "/program",
  },
  {
    title: "Hobby",
    icon: SiHyperskill,
    path: "/hobby",
  },
  {
    title: "Members",
    icon: PiUsersFourFill,
    path: "/member",
  },
  
  {
    title: "Testimony",
    icon: BsChatLeftHeartFill,
    path: "/testimony",
  },
  {
    title: "Suggestion",
    icon: FaComments,
    path: "/suggestion",
  },
  {
    title: "Comments",
    icon: BiSolidMessageDots,
    path: "/comments",
  },
  {
    title: "Heros",
    icon: GiBrokenHeart,
    path: "/heros",
  },
  {
    title: "Changes Password",
    icon: TbLockFilled,
    path: "/password",
  },
  
];

const Aside = ({ hamburger, toggleHamburger }: any) => {
  const location = useLocation();
  //   const [hamburger, setHamburger] = useState(true);
  return (
    <aside
      className={`transition-transform ${hamburger
          ? "w-[16%] -translate-x-full md:translate-x-0 lg:translate-x-0"
          : "translate-x-0 md:-translate-x-full lg:-translate-x-full"
        } fixed z-40 left-0 top-10 overflow-x-hidden pt-10 h-screen bg-[#e6e6e6] border-r-2 border-DarkGray shadow-lg  duration-200`}
    >
      <div className="flex flex-col justify-between pt-3 pl-3 pr-3 md:pl-5">
        <h1 className="text-2xl font-extrabold text-Black">Hello! Ebuka</h1>
        <div className="mt-10  overflow-y-auto">
          <ul className="flex flex-col justify-items-stretch">
            {NavItems.map(({ title, icon: Icon, path }: NavItem) => (
              <li className="mb-5">
                <Link
                  to={path}
                  // onClick={() => toggleHamburger()}
                  className={`flex items-center whitespace-nowrap gap-2 font-semibold ${location.pathname.includes(path) ? 'text-Danger' : ''}`}
                >
                  <span>
                    <Icon />
                  </span>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
