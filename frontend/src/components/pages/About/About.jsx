import React from "react";
import InnerPage from "../../common/InnerHero/InnerPage";
import WhyWe from "../Home/WhyWe";
import "./About.css";
import Mission from "./Mission";
import Excos from "./Excos";
import { BsFillInfoSquareFill } from "react-icons/bs";
import History from "./History";

const About = () => {
  return (
    <section className="aboutus">
      <InnerPage title="About Us" icon={<BsFillInfoSquareFill />} />
      <History />
      <WhyWe />
      <Excos />
      <Mission />
    </section>
  );
};

export default About;
