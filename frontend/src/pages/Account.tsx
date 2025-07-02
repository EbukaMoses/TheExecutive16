import { useState } from "react";
import { MdContacts } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import {
  FaUser,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaSignInAlt,
  FaLock,
  FaCalendarAlt,
} from "react-icons/fa";
import Unizik from "/images/unizik.png";
import Logo16 from "/images/favicon.png";
import Button from "../ui/Button";
// import {
//   FaSquarePhone,
//   FaSquareFacebook,
//   FaSquareInstagram,
//   FaSquareXTwitter,
//   FaLinkedin,
// } from "react-text-[#797878]s/fa6";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [showCpass, setShowCpass] = useState(true);
  const [signIn, setSignin] = useState(false);

  return (
    <section className="">
      <div className="flex justify-center items-center py-[8%]">
        <div className="flex w-[30%] top-[10] bottom-[20] border-t-4 border-red-600 p-[40px] shadow-md">
          {/* <div className="logo-side">
            <img src={Unizik} alt="" className="unizik-logo" />
            <img src={Logo16} alt="" className="class-logo" />
          </div> */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <img src={Unizik} alt="" className="w-[15%]" />
              <div>
                <h1 className="text-[20px] font-bold text-center text-[#a50e0e} uppercase">{signIn ? "Sign Up" : "Sign In"}</h1>
                <span>
                  {signIn ? (
                    <span className="text-[16px] italic text-center">
                      Have an account?
                      <em onClick={() => setSignin(false)} className=" text-[16px] text-[#a50e0e] cursor-pointer"> SignIn</em>
                    </span>
                  ) : (
                    <span className="text-[16px] italic text-center">
                      Don't have an account?{" "}
                      <em onClick={() => setSignin(true)} className="text-[16px] text-[#a50e0e] cursor-pointer">Sign Up</em>
                    </span>
                  )}
                </span>
              </div>
              <img src={Logo16} alt="" className="w-[12%]" />
            </div>
            <form className="mt-[30px]">
              {signIn && (
                <div className="flex items-center relative w-full border-[1.6px] border-[#b9b7b7] mb-[18px] py-[2px] px-[12px] rounded-md">
                  <FaUser className="text-[#797878]" />
                  <input className="w-full outline-none border-0 py-[6px] ml-[5px]"
                    type="text"
                    value={firstName}
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              )}
              {signIn && (
                <div className="flex items-center relative w-full border-[1.6px] border-[#b9b7b7] mb-[18px] py-[2px] px-[12px] rounded-md">
                  <FaUser className="text-[#797878]" />
                  <input className="w-full outline-none border-0 py-[6px] ml-[5px]"
                    type="text"
                    value={lastName}
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              )}
              <div className="flex items-center relative w-full border-[1.6px] border-[#b9b7b7] mb-[18px] py-[2px] px-[12px] rounded-md">
                <FaEnvelope className="text-[#797878]" />
                <input className="w-full outline-none border-0 py-[6px] ml-[5px]"
                  type="email"
                  value={email}
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {signIn && (
                <div className="flex items-center relative w-full border-[1.6px] border-[#b9b7b7] mb-[18px] py-[2px] px-[12px] rounded-md">
                  <FaPhoneSquareAlt className="text-[#797878]" />
                  <input className="w-full outline-none border-0 py-[6px] ml-[5px]"
                    type="tel"
                    value={phone}
                    placeholder="+2347038689968"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              )}
              {/* <div className="flex items-center relative w-full border-[1.6px] border-[#b9b7b7] mb-[18px] py-[2px] px-[12px] rounded-md">
                <FaCalendarAlt className="text-[#797878]" />
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div> */}
              <div className="flex items-center relative w-full border-[1.6px] border-[#b9b7b7] mb-[18px] py-[2px] px-[12px] rounded-md">
                <FaLock className="text-[#797878]" />
                <input className="w-full outline-none border-0 py-[6px] ml-[5px]"
                  type={showPass ? "password" : "text"}
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPass ? (
                  <IoEye
                    className="text-[#5d5c5c] text-[25px] cursor-pointer"
                    onClick={() => setShowPass(false)}
                  />
                ) : (
                  <IoMdEyeOff
                    className="text-[#5d5c5c] text-[25px] cursor-pointer"
                    onClick={() => setShowPass(true)}
                  />
                )}
              </div>
              {signIn && (
                <div className="flex items-center relative w-full border-[1.6px] border-[#b9b7b7] mb-[18px] py-[2px] px-[12px] rounded-md">
                  <FaLock className="text-[#797878]" />
                  <input className="w-full outline-none border-0 py-[6px] ml-[5px]"
                    type={showCpass ? "password" : "text"}
                    value={cpassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                  {showCpass ? (
                    <IoEye
                      className="text-[#5d5c5c] text-[25px] cursor-pointer"
                      onClick={() => setShowCpass(false)}
                    />
                  ) : (
                    <IoMdEyeOff
                      className="text-[#5d5c5c] text-[25px] cursor-pointer"
                      onClick={() => setShowCpass(true)}
                    />
                  )}
                </div>
              )}
              {signIn ? (
                <Button title="Sign Up" icon={<FaSignInAlt />} path="" className="bg-DarkRed text-white justify-center" />
              ) : (
                <Button title="Sign In" icon={<FaSignInAlt />} path="" className="bg-DarkRed text-white justify-center" />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
