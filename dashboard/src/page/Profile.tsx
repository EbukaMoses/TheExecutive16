import { MdVerified } from "react-icons/md";
import User from "/images/User.jpg";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTikTok } from "react-icons/ai";
import {
  FaLinkedin,
  FaSquareSnapchat,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Button from "../ui/Button";
// import { useState } from "react";
import { BiEdit } from "react-icons/bi";
const Profile = () => {
  // const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="card flex items-center justify-between gap-10">
        <p className="text-Danger text-[12px] md:text-base leading-none">**Please complete your Profile to get listed on the website**</p>
        <Button
          title="Edit Profile"
          path={"/editprofile"}
          className="bg-Primary hover:bg-transparent border-[1px] hover:border-Primary hover:text-Primary"
          icon={<BiEdit />}
        />{" "}
      </div>
      <div className="p-2 gap-3 flex flex-col lg:flex-row">
        {/* Card with image  */}
        <div className="card w-full lg:max-w-[350px] flex flex-col items-center">
          <img
            src={User}
            alt=""
            className="w-48 shadow-md rounded-full border-4 border-Success"
          />
          <h2 className="text-2xl font-bold flex items-center">
            Ebuka Moses{" "}
            <span className="text-base text-green-600">
              <MdVerified title="Verified" />
            </span>
          </h2>
          <div className="italic">Software Developer</div>
          <span className="text-[14px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            inventore.
          </span>
          {/* Personal Info  */}
          <div className="flex flex-col p-3 rounded-l bg-[#e6e6e643] mt-3 shadow-lg gap-2">
            <p>
              <strong>Phone:</strong> 0901234567890
            </p>
            <p>
              <strong>Email:</strong> sample@gmail.com
            </p>
            <p>
              <strong>Gender:</strong> sample@gmail.com
            </p>
            <p>
              <strong>Status:</strong> sample@gmail.com
            </p>
            <p>
              <strong>Date of Birth:</strong> sample@gmail.com
            </p>
            <p>
              <strong>State of origin:</strong> sample@gmail.com
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {/* Row Section  */}
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Bio Section  */}
            <div className="card w-full">
              <h2 className="text-l font-bold mb-4">Bio</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                neque maxime libero earum aut harum saepe excepturi officia
                natus reiciendis! Dolorum, unde. Omnis iure dolorum maiores, vel
                debitis esse reiciendis!
              </p>
            </div>
            {/* Residential Address  */}
            <div className="card w-full">
              <h2 className="text-l font-bold mb-4"> Residential Address</h2>
              <p>
                <strong>Address:</strong> 12 Eze ego street lekki
              </p>
              <p>
                <strong>City:</strong> 12 Eze ego street lekki
              </p>
              <p>
                <strong>State:</strong> 12 Eze ego street lekki
              </p>
            </div>
          </div>

          {/* Row Section  */}
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Secondary School Education Section  */}
            <div className="card w-full">
              <h2 className="text-l font-bold mb-4">Secondary School</h2>
              <p>
                <strong>School:</strong> DMGS College
              </p>
              <p>
                <strong>State:</strong> DMGS College
              </p>
              <p>
                <strong>Year of Graduation:</strong> DMGS College
              </p>
            </div>
            {/* Social medias  */}
            <div className="card w-full">
              <h2 className="text-l font-bold mb-4">Social Media</h2>

              <span className="flex flex-wrap gap-3 text-2xl">
                <Link to="">
                  <AiFillFacebook title="Facebook" />
                </Link>
                <Link to="">
                  <FaSquareXTwitter title="Twitter" />
                </Link>
                <Link to="">
                  <FaInstagramSquare title="Instagram" />
                </Link>
                <Link to="">
                  <FaLinkedin title="Linkedin" />
                </Link>
                <Link to="">
                  <FaSquareSnapchat title="Snapchat" />
                </Link>
                <Link to="">
                  <AiFillTikTok title="Tiktok" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
