import { FaBriefcase, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Mike } from "../../public/images";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";
// import MemberModal from "./MemberModal";

const MemberCard = () => {
  const [modal, setModal] = useState(false)
  return (
    <div>
      <Link to="/member/id" className="">
        {/* <div className="relative w-[200px] shadow-lg grayscale-[50] hover:grayscale-0 cursor-pointer" onClick={() => setModal(true)}> */}
        <div className="relative w-full lg:w-[200px] shadow-lg grayscale-[50] hover:grayscale-0 cursor-pointer" >
          <div className="teamimg group overflow-hidden">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="absolute top-3 right-3 !z-50 text-xl hover:text-[#0a66c2]"
            >
              <FaLinkedin />
            </a>
            <img
              src={Mike}
              alt="team"
              className="w-full group-hover:scale-110 duration-300"
            />
          </div>
          <div className="relative py-2 px-4 flex-column bg-DarkRed">
            <h3 className="text-lg font-bold  text-white">Ebuka Moses</h3>
            <span className="flex items-center text-sm text-white">
              <FaBriefcase /> &nbsp;
              <span className="italic font-semibold">Software Developer</span>
            </span>
            <span className="flex items-center text-sm text-white">
              <IoLocation /> &nbsp;
              <span className="italic font-semibold">Lagos</span>
            </span>
          </div>
        </div>
        {/* {modal && <MemberModal setModal={setModal} />} */}
      </Link>
    </div>
  );
};

export default MemberCard;
