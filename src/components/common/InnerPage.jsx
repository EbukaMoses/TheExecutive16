import React, { useEffect } from "react";
//import
import AOS from "aos";
import "aos/dist/aos.css";

const InnerPage = ({ title, icon }) => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="InnerPage">
      <span
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {icon && icon} {title}
      </span>
    </div>
  );
};

export default InnerPage;
