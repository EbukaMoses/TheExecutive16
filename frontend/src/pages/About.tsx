import { BsFillInfoSquareFill } from "react-icons/bs";
import InnerBanner from "../ui/InnerBanner";
import AboutUs from "../ui/AboutUs";
import History from "../ui/History";
import WhyWeExist from "../ui/WhyWeExist";
import Excos from "../ui/Excos";
import Mission from "../ui/Mission";
import AboutUsBox from "../ui/AboutUsBox";

const About = () => {
  return (
    <div>
      <InnerBanner title="About Us" icon={<BsFillInfoSquareFill />} />
      <AboutUs />
      <AboutUsBox />
      <History />
      <WhyWeExist />
      <Excos />
      <Mission />
    </div>
  );
};

export default About;
