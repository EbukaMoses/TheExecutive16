import React, { useState } from "react";
import "./Login.css";
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
import Button from "../../common/Button";
import Unizik from "/images/unizik.png";
import Logo16 from "/images/favicon.png";
// import {
//   FaSquarePhone,
//   FaSquareFacebook,
//   FaSquareInstagram,
//   FaSquareXTwitter,
//   FaLinkedin,
// } from "react-icons/fa6";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [showCpass, setShowCpass] = useState(true);
  const [signIn, setSignin] = useState(true);

  return (
    <section className="login">
      <div className="form-container">
        <div className="register-card">
          {/* <div className="logo-side">
            <img src={Unizik} alt="" className="unizik-logo" />
            <img src={Logo16} alt="" className="class-logo" />
          </div> */}
          <div className="form-side">
            <div className="form-header">
              <img src={Unizik} alt="" className="unizik-logo" />
              <div>
                <h1>{signIn ? "Sign Up" : "Sign In"}</h1>
                <span>
                  {signIn ? (
                    <span>
                      Already have an account? <em onClick={() => setSignin(false)}>SignIn</em>
                    </span>
                  ) : (
                    <span>
                      Don't have an account? <em onClick={()=> setSignin(true)}>Sign Up</em>
                    </span>
                  )}
                </span>
              </div>
              <img src={Logo16} alt="" className="class-logo" />
            </div>
            <form>
              {signIn && (
                <div className="input-group">
                  <FaUser className="icon" />
                  <input
                    type="text"
                    value={firstName}
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              )}
              {signIn && (
                <div className="input-group">
                  <FaUser className="icon" />
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              )}
              <div className="input-group">
                <FaEnvelope className="icon" />
                <input
                  type="text"
                  value={email}
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {signIn && (
                <div className="input-group">
                  <FaPhoneSquareAlt className="icon" />
                  <input
                    type="tel"
                    value={phone}
                    placeholder="+2347038689968"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              )}
              {/* <div className="input-group">
                <FaCalendarAlt className="icon" />
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div> */}
              <div className="input-group">
                <FaLock className="icon" />
                <input
                  type={showPass ? "password" : "text"}
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPass ? (
                  <IoEye
                    className="eye-icon"
                    onClick={() => setShowPass(false)}
                  />
                ) : (
                  <IoMdEyeOff
                    className="eye-icon"
                    onClick={() => setShowPass(true)}
                  />
                )}
              </div>
              {signIn && (
                <div className="input-group">
                  <FaLock className="icon" />
                  <input
                    type={showCpass ? "password" : "text"}
                    value={cpassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                  {showCpass ? (
                    <IoEye
                      className="eye-icon"
                      onClick={() => setShowCpass(false)}
                    />
                  ) : (
                    <IoMdEyeOff
                      className="eye-icon"
                      onClick={() => setShowCpass(true)}
                    />
                  )}
                </div>
              )}
              {signIn ? (
                <Button title="Sign Up" icon={<FaSignInAlt />} bg="bgred" />
              ) : (
                <Button title="Sign In" icon={<FaSignInAlt />} bg="bgred" />
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
