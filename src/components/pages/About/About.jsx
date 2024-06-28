import React from "react";
import InnerPage from "../../common/InnerPage";
import WhyWe from "../Home/WhyWe";
import "./About.css";
import Mission from "./Mission";
import Excos from "./Excos";
import { BsFillInfoSquareFill } from "react-icons/bs";

const About = () => {
  return (
    <section className="aboutus">
      <InnerPage title="About Us" icon={<BsFillInfoSquareFill />} />
      <WhyWe />
      <Mission />
      <Excos />
    </section>
  );
};

export default About;
