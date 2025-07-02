import { FaEnvelope, FaLinkedin, FaSkype, FaUserCircle } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquarePhone,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoMdLocate } from "react-icons/io";
import { SlBriefcase } from "react-icons/sl";
import { Mike } from "../../public/images";
import { useState } from "react";


const MemberDetailCard = () => {
  const [tab, setTab] = useState("0");

  const TabAbout = () => {
    return <div>About</div>;
  };
  const TabBiz = () => {
    return <div>Business</div>;
  };
  const TabBlog = () => {
    return <div>Blog</div>;
  };

  const memberTab = (tab: string) => {
    switch (tab) {
      case "0":
        return <TabAbout />;
      case "1":
        return <TabBiz />;
      case "2":
        return <TabBlog />;
      default:
        return <TabAbout />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 mt-0 lg:mt-5 mb-24">
      <div className="w-full lg:w-[30%]">
        <div className="w-[350px] mb-3 overflow-hidden">
          <img src={Mike} alt="" className="w-full object-cover rounded-xl shadow-lg" />
        </div>
      </div>
      <div className="w-full lg:w-[70%]">
        <div className="p-5 shadow-lg">
          <h1 className="flex items-center gap-[10px] text-2xl font-bold">
            <FaUserCircle />
            Kalu Izzy
          </h1>
          <h4 className="flex items-center gap-[10px] text-lg font-semibold">
            <SlBriefcase /> Software Developer
          </h4>
          <h4 className="flex items-center gap-[10px] text-lg font-semibold">
            <IoMdLocate />
            Abuja
          </h4>
          <hr className="my-[10px]" />
          <div className="flex gap-2 text-xl text-DarkGray">
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
          <hr className="my-[10px]" />
          <div className="flex gap-1 text-[10px] flex-wrap font-semibold p-1">
            <h5 className="text-base font-bold">Hobby:</h5>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Traveling
            </span>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Reading
            </span>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Singing
            </span>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Making Friends
            </span>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Browsing
            </span>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Singing
            </span>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Cooking
            </span>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Drawing
            </span>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Dancing
            </span>
            <span className="px-2 py-[1px] text-[10px] rounded-lg bg-DarkGray text-white shadow-md flex items-center">
              Sport
            </span>
          </div>
        </div>
        <br />

        <div className="relative p-5 bg-white shadow-lg">
          <ul className="w-full whitespace-nowrap border-b-2 border-[#444] mb-6 overflow-x-auto flex items-center gap-5">
            {/* .tab-menu::-webkit-scrollbar {
              display: none;
            } */}

            <li
              className={`inline-block text-lg font-semibold p-2 cursor-pointer select-none transition-all ${tab === "0" ? "border-b-2 border-DarkRed text-DarkRed" : ""
                }`} onClick={() => setTab("0")}
            >
              About
            </li>

            <li
              className={`inline-block text-lg font-semibold p-2 cursor-pointer select-none transition-all ${tab === "1" ? "border-b-2 border-DarkRed text-DarkRed" : ""
                }`} onClick={() => setTab("1")}
            >
              Business
            </li>

            <li
              className={`inline-block text-lg font-semibold p-2 cursor-pointer select-none transition-all ${tab === "2" ? "border-b-2 border-DarkRed text-DarkRed" : ""
                }`} onClick={() => setTab("2")}
            >
              Blog
            </li>
          </ul>
          <div>{memberTab(tab)}</div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailCard;
