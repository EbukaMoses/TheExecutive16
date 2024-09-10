import React, { useEffect } from "react";
import hero from "/images/hero.jpg";
import Button from "../../common/Button/Button";
//import
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="hero">
      <div className="overlay"></div>
      <img src={hero} alt="The Executive Hero Image" />
      <div className="heroContent">
        <h2
        // data-aos="fade-up"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
        >
          Executive Managers
        </h2>
        {/* <p>
          Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p> */}
        {/* <Button title="Learn More" path="/" icon="" bg="bgred" /> */}
      </div>
    </div>
  );
};

export default Hero;
