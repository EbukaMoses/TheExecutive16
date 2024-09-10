import React, { useEffect } from "react";
//import
import AOS from "aos";
import "aos/dist/aos.css";
import bubble from "/images/bubble.png";
import drops from "/images/drops.png";
import hero from "/images/hero.jpg";

const InnerPage = ({ title, icon }) => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="InnerPage">
    <div className="overlay"></div>
      <img src={hero} alt="" />
      <span
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {icon && icon} {title}
      </span>
      <div className="bubbles">
        <img src={bubble} alt="" />
        <img src={drops} alt="" />
        <img src={bubble} alt="" />
        <img src={drops} alt="" />
        <img src={bubble} alt="" />
        <img src={drops} alt="" />
        <img src={bubble} alt="" />
        <img src={drops} alt="" />
        <img src={bubble} alt="" />
        <img src={drops} alt="" />
        <img src={bubble} alt="" />
        <img src={drops} alt="" />
        <img src={bubble} alt="" />
        <img src={drops} alt="" />
      </div>
    </div>
  );
};

export default InnerPage;
